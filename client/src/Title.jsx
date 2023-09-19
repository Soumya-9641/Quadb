import React from "react";


const titles = ["ID", "Platform", "Last Traded Price", "Buy/Sell Price", "Difference", "Savings"];
const items = [
    ["Item 1.1", "Item 1.2", "Item 1.3", "Item 1.4", "Item 1.5", "Item 1.6"],
 
  ];
const TitleContainer = () => {
  return (
    <>
   
    {/* <div className="flex md:flex-wrap sm:justify-between sm:flex-row  p-10">
      {titles.map((title, index) => (
        <div key={index} className="w-full sm:w-auto mb-2 sm:mb-0 text-white">
             <h2 className="text-lg font-semibold mb-2">{title}</h2>
          
        </div>
      ))}
      
    </div> */}

<div className="flex flex-wrap justify-between text-white">
        <div className="w-1/6 pl-4">
            <h2 className="text-lg font-semibold pl-8 mb-2">ID</h2>
          </div>
          <div className="w-1/6">
            <p> Platform</p>
          </div>
          <div className="w-1/6">
            <p> Last Traded Price</p>
          </div>
          <div className="w-1/6 ">
            <p>Buy/sell price</p>
          </div>
          <div className="w-1/6 pr-4">
            <p>volumes</p>
          </div>
          <div className="w-1/6 pr-8">
            <p>base_unit</p>
          </div>
        </div>

    
    

    {/* <div className="flex md:flex-wrap sm:justify-between sm:flex-row">
    
{items.map((item, itemIndex) => (
    <div key={itemIndex} className="w-full sm:w-auto mb-2 sm:mb-0 text-white">
        <h2 className="text-lg font-semibold mb-2">{item}</h2>
    
</div>
))}
    </div> */}

</>
  );
};

export default TitleContainer;