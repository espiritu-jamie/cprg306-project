"use client";

import { useState } from "react";
import PantryItem from "./pantry-item";

export default function PantryList({ items, onItemSelect, onDelete }) {
  const [sortBy, setSortBy] = useState("name");

  const handleItemSelect = (ingredientName, isChecked) => {
    onItemSelect(ingredientName, isChecked);
  };

  const sortingFunctions = {
    name: (a, b) => a.name.localeCompare(b.name),
    category: (a, b) => a.category.localeCompare(b.category),
    expiryDate: (a, b) => new Date(a.expiryDate) - new Date(b.expiryDate),
    purchaseDate: (a, b) => new Date(a.purchaseDate) - new Date(b.purchaseDate)
  };

  const sortedItems = [...items].sort(sortingFunctions[sortBy]);

  const handleSortChange = (sortByValue) => {
    setSortBy(sortByValue);
  };

  return (
    <div>
      <div className="flex justify-center space-x-2 mb-4">
        <button onClick={() => handleSortChange("name")} className={`btn ${sortBy === "name" ? "btn-active" : ""}`}>Sort by Name</button>
        <button onClick={() => handleSortChange("category")} className={`btn ${sortBy === "category" ? "btn-active" : ""}`}>Sort by Category</button>
        <button onClick={() => handleSortChange("expiryDate")} className={`btn ${sortBy === "expiryDate" ? "btn-active" : ""}`}>Sort by Expiry Date</button>
        <button onClick={() => handleSortChange("purchaseDate")} className={`btn ${sortBy === "purchaseDate" ? "btn-active" : ""}`}>Sort by Purchase Date</button>
      </div>

      <div className="card bg-stone-100 p-4 rounded-xl shadow-lg">
        {items.length === 0 ? (
          <p className="text-center">No items in pantry.</p>
        ) : (
          items.sort(sortingFunctions[sortBy]).map((item) => (
            <PantryItem
              key={item.id}
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
              expiryDate={item.expiryDate}
              purchaseDate={item.purchaseDate}
              onSelect={onItemSelect}
              onDelete={onDelete}
            />
          ))
        )}
      </div>
    </div>
  );
}