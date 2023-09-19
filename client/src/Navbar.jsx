import React,{useState} from 'react'

//import 'bootstrap/dist/css/bootstrao.css';
const Navbar = () => {
 
  return (
    <>
  
    <nav className='w-full flex py-2 justify-between items-center navbar '>
        <img src="https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png" alt='donateking'  className='w-[150px] h-[60px] ml-2'/>
       

        <div className='flex justify-center items-center space-x-4 flex-grow'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          INR
        </button>
        <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>
            BTC
        </button>
        <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>
          BUY BTC
        </button>
      </div>

      <div className='flex justify-center items-center space-x-4 mr-6'>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
          Connect In Telegram
        </button>
        
      </div>
    </nav>
       
    </>
  )
}

export default Navbar