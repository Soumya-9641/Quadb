
import './App.css';
import Navbar from './Navbar';
import React,{useEffect,useState} from "react"

import TitleContainer from "./Title"
import Middle from "./Middle"

const titles = ["Title 1", "Title 2", "Title 3", "Title 4", "Title 5", "Title 6"];
function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from your Express.js endpoint
    fetch('http://localhost:8001/getdata')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);
  return (
    
    <div className="bg-primary w-full overflow-hidden">
      console.log(data)
    <Navbar/>
    <div className='flex justify-center items-center text-gradient  border-b-[1px] border-b-[#70b3ad] mb-10 mt-0'>
    <h1 className="text-2xl font-bold text-center p-4">Best Price To Trade</h1>
   
           
    </div>
    <Middle/>
    <TitleContainer/>
    
    <div className='bg-gradient p-6 mb-10'>
  {data.map((item, index) => (
    <div key={index} className=" p-4 mb-4 rounded-md">
      <div className="text-black">
      
        <div className="flex flex-wrap  bg-discount-gradient p-4 rounded justify-between text-white">
        <div className="w-1/6">
            <h2 className="text-lg font-semibold mb-2 ">{item.id}</h2>
          </div>
          <div className="w-1/6">
            <p> {item.name}</p>
          </div>
          <div className="w-1/6">
            <p> {item.last}</p>
          </div>
          <div className="w-1/6 ">
            <p>{item.buy}</p>
          </div>
          <div className="w-1/6 pl-4">
            <p>{item.volume}</p>
          </div>
          <div className="w-1/6 pl-8">
            <p>{item.base_unit}</p>
          </div>
        </div>
        
        
        
      </div>
    </div>
  ))}
</div>
 
    
</div>
  );
}

export default App;
