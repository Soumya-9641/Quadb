const express= require('express')
//const { Client } = require("pg")
const client= require("./connect")
const port = process.env.PORT || 8001;
const bodyParser = require("body-parser");
const cors = require('cors');

// Enable CORS for all routes

const app = express();
app.use(cors());
app.use(express.json())
//const db = pgp('postgres://postgres:postgres@localhost:5432/postgres');

// Middleware
app.use(bodyParser.json());

// Fetch data from WazirX API and store it in the database
app.get('/fetchdata', async (req, res) => {
    try {
        const response = await fetch('https://api.wazirx.com/api/v2/tickers');
        const data = await response.json();
    
        // Check if the data is an object and contains the required keys
        if (typeof data === 'object' && Object.keys(data).length > 0) {
          // Extract the first 10 items from the data
          const first10Items = Object.values(data).slice(0, 10);
    
          // Extract and prepare specific fields for insertion
          const preparedData = first10Items.map((item) => ({
            name: item.name,
            last: parseFloat(item.last),
            buy: parseFloat(item.buy),
            sell: parseFloat(item.sell),
            volume: parseFloat(item.volume),
            base_unit: item.base_unit,
          }));
    
          // Insert prepared data into the database
          for (const item of preparedData) {
            await client.query(
              'INSERT INTO crypto_data (name, last, buy, sell, volume, base_unit) VALUES ($1, $2, $3, $4, $5, $6)',
              [item.name, item.last, item.buy, item.sell, item.volume, item.base_unit]
            );
          }
    
          res.json({ message: 'Data fetched and stored successfully' });
        } else {
          console.error('Invalid data format from the API');
          res.status(500).json({ error: 'Invalid data format from the API' });
        }
      } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: 'Error fetching and storing data' });
      }
});

// Fetch data from the database
app.get('/getdata', async (req, res) => {
    try {
      const data = await client.query('SELECT * FROM crypto_data');
      res.json(data.rows);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Error fetching data from the database' });
    }
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

client.connect();