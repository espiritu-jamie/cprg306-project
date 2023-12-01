import Image from "next/image";

export default function MealDetailsModal({ meal, onClose }) {
    return (
      <dialog id="mealDetailsModal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-stone-100">
          <div className="flex flex-col items-center text-center">
            <h3 className="font-bold text-xl mb-4">{meal.strMeal}</h3>
            <Image src={meal.strMealThumb} alt={meal.strMeal} layout="fill"
              objectFit="contain" />
          </div>
  
          <p className="py-4">{meal.strInstructions}</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-secondary" onClick={onClose}>Close</button>
            </form>
          </div>
        </div>
      </dialog>
    );
  }