"use client";

import { useState, useEffect } from 'react';
import MealDetailsModal from './meal-details-modal';

export default function MealIdeas({ ingredients }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  const showMealDetails = async (mealId) => {
    await fetchMealDetails(mealId);
  };

  const fetchMealDetails = async (mealId) => {
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
      const data = await response.json();
      setSelectedMeal(data.meals[0]);
    } catch (error) {
      console.error('Error fetching meal details:', error);
    }
  };

  useEffect(() => {
    if (selectedMeal) {
      document.getElementById('mealDetailsModal').showModal();
    }
  }, [selectedMeal, ingredients]);

  useEffect(() => {
    const fetchMeals = async () => {
      if (ingredients.length === 0) return;

      try {
        const mealsResponses = await Promise.all(
          ingredients.map(ingredient =>
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
              .then(response => response.json())
              .then(data => data.meals || [])
          )
        );

        const combinedMeals = rankRecipes(mealsResponses.flat());
        setMeals(combinedMeals);
      } catch (error) {
        console.error('Error fetching meal ideas:', error);
        setMeals([]);
      }
    };

    fetchMeals();
  }, [ingredients]);

  function rankRecipes(combinedMeals) {
    const mealCount = combinedMeals.reduce((acc, meal) => {
      acc[meal.idMeal] = acc[meal.idMeal] || { ...meal, count: 0 };
      acc[meal.idMeal].count += 1;
      return acc;
    }, {});

    return Object.values(mealCount).sort((a, b) => b.count - a.count);
  }

  // Group meals by the count of matched items
  const groupedMeals = meals.reduce((acc, meal) => {
    acc[meal.count] = acc[meal.count] || [];
    acc[meal.count].push(meal);
    return acc;
  }, {});

  return (
    <div>
      {meals.length === 0 ? (
        <p>No meal ideas found.</p>
      ) : (
        Object.entries(groupedMeals).sort((a, b) => b[0] - a[0]).map(([count, meals]) => (
          <div key={count}>
            <h3 className="text-xl font-semibold my-2">
            Matched {count} pantry {count === "1" ? 'item' : 'items'}:
            </h3>
            <ul>
              {meals.map(meal => (
                <li key={meal.idMeal} onClick={() => showMealDetails(meal.idMeal)} className="cursor-pointer hover:bg-base-200 p-2 rounded-md">
                  {meal.strMeal}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}

      {selectedMeal && (
        <MealDetailsModal meal={selectedMeal} onClose={() => setSelectedMeal(null)} />
      )}
    </div>
  );
}
