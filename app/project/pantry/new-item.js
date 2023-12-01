"use client";
import { useState } from "react";

export default function NewPantryItem({ onAddItem }) {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState("Produce");
  const [expiryDate, setExpiryDate] = useState("");
  const [purchaseDate, setPurchaseDate] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handlePurchaseDateChange = (event) => {
    setPurchaseDate(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newItem = {
      name,
      quantity,
      category,
      expiryDate,
      purchaseDate,
    };

    onAddItem(newItem);

    setName("");
    setQuantity(1);
    setCategory("Produce");
    setExpiryDate("");
    setPurchaseDate("");
  };

  return (
    <div className="flex justify-center items-center w-full">
      <form onSubmit={handleSubmit} className="p-6 mt-7 rounded-xl bg-stone-100 text-black max-w-sm w-full space-y-3">
        <div className="flex flex-col">
        <label htmlFor="itemName" className="mb-2 text-lg font-medium">Item Name:</label>
          <input
            id="itemName"
            type="text"
            value={name}
            onChange={handleNameChange}
            className="w-full mt-1 border-2 border-gray-400 p-2 rounded-lg"
            placeholder="Item Name"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="quantity" className="mb-2 text-lg font-medium">Quantity:</label>
          <input
            id="quantity"
            type="number"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-full mt-1 border-2 border-gray-400 p-2 rounded-lg"
            placeholder="Quantity"
            min="1"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="category" className="mb-2 text-lg font-medium">Category:</label>
          <select
            id="category"
            value={category}
            onChange={handleCategoryChange}
            className="w-full mt-1 border-2 border-gray-400 p-2 rounded-lg"
          >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Meat">Meat</option>
          <option value="Bakery">Bakery</option>
          <option value="Pantry">Pantry</option>
          <option value="Frozen">Frozen</option>
          <option value="Beverages">Beverages</option>
          <option value="Snacks">Snacks</option>
          <option value="Canned">Canned</option>
          <option value="Other">Other</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label htmlFor="purchaseDate" className="mb-2 text-lg font-medium">Purchase Date:</label>
          <input
            id="purchaseDate"
            type="date"
            value={purchaseDate}
            onChange={handlePurchaseDateChange}
            className="w-full mt-1 border-2 border-gray-400 p-2 rounded-lg"
            required
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="expiryDate" className="mb-2 text-lg font-medium">Expiry Date:</label>
          <input
            id="expiryDate"
            type="date"
            value={expiryDate}
            onChange={handleExpiryDateChange}
            className="w-full mt-1 border-2 border-gray-400 p-2 rounded-lg"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary mt-4 w-full">Add Item</button>
      </form>
    </div>
  );
}