"use client";

import { useState } from "react";
import NewPantryItem from "./new-item";
import PantryList from "./pantry-list";
import MealIdeas from "./meal-idea";
import { getItems, addItem, deleteItem } from "../_services/pantry-list-service";
import { useEffect } from "react";
import Link from "next/link";
import { useUserAuth } from "../_utils/auth-context";


export default function Pantry() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const [pantryItems, setPantryItems] = useState([]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);

  async function handleAddItem(newItem) {
    await addItem(user.uid, newItem, setPantryItems);
  }

  async function handleSignOut() {
    await firebaseSignOut();
  }

  async function loadPantryItems() {
    const items = await getItems(user.uid);
    setPantryItems(items);
  }

  useEffect(() => {
    if (user) {
      loadPantryItems();
    }
  }, [user?.uid]);

  const handleItemSelect = (ingredientName, isChecked) => {
    setSelectedIngredients(prevIngredients => {
      if (isChecked) {
        // Add ingredient if checkbox is checked
        return [...prevIngredients, ingredientName];
      } else {
        // Remove ingredient if checkbox is unchecked
        return prevIngredients.filter(name => name !== ingredientName);
      }
    });
  };

  if (!user) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-center text-xl mb-4">
          You must be logged in to access this page.
        </p>
        <Link href="/"
          className="btn btn-accent btn-outline">
            Back to Home
        </Link>
      </main>
    );
  }

  const handleDeleteItem = async (itemId) => {
    await deleteItem(user.uid, itemId);
    setPantryItems(pantryItems.filter(item => item.id !== itemId));
  };
 

  return (
    <div className="container mx-auto p-4 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-4xl font-bold">My Pantry</h1>
        <button onClick={handleSignOut} className="btn btn-secondary">
          Sign out
        </button>
      </div>

      <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-4">
        <div className="lg:w-1/3 lg:mt-10">
          <NewPantryItem onAddItem={handleAddItem} />
        </div>
        <div className="lg:w-2/3">
          <PantryList items={pantryItems} onItemSelect={handleItemSelect} onDelete={handleDeleteItem} />
        </div>
      </div>

      <div className="mt-10">
      <div className="card bg-stone-100 p-4 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Meal Ideas</h2>
        {selectedIngredients.length > 0 ? (
          <MealIdeas ingredients={selectedIngredients} />
        ) : (
          <p>No meal ideas available. Select items to see suggestions.</p>
        )}
      </div>
    </div>

      <div className="text-center mt-6">
        <Link href="/"
          className="btn btn-accent btn-outline">
            Back to Home
        </Link>
      </div>
    </div>
  );
}

