import React from "react";

const items = [
  ["Item 1.1", "Item 1.2", "Item 1.3", "Item 1.4", "Item 1.5", "Item 1.6"],
  ["Item 2.1", "Item 2.2", "Item 2.3", "Item 2.4", "Item 2.5", "Item 2.6"],
  ["Item 3.1", "Item 3.2", "Item 3.3", "Item 3.4", "Item 3.5", "Item 3.6"],
  ["Item 4.1", "Item 4.2", "Item 4.3", "Item 4.4", "Item 4.5", "Item 4.6"],
  ["Item 5.1", "Item 5.2", "Item 5.3", "Item 5.4", "Item 5.5", "Item 5.6"],
  ["Item 6.1", "Item 6.2", "Item 6.3", "Item 6.4", "Item 6.5", "Item 6.6"],
];

const ItemListComponent = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((itemGroup, index) => (
        <div key={index} className="mb-4">
          <h2 className="text-lg font-semibold mb-2">Title {index + 1}</h2>
          <ul>
            {itemGroup.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ItemListComponent;