export default function PantryItem({ id, name, quantity, category, expiryDate, purchaseDate, onSelect, onDelete }) {
    const handleCheckboxChange = (event) => {
      onSelect(name, event.target.checked);
    }
  
    return (
      <div className="flex items-center mb-2 bg-stone-100 p-2 rounded-lg">
        <input type="checkbox" onChange={handleCheckboxChange} className="mr-3" />
        <div className="flex-grow">
          <p className="text-lg font-semibold">{name} - {quantity} in {category}</p>
          <p className="text-sm">Expiry: {expiryDate}, Purchased: {purchaseDate}</p>
        </div>
        <button onClick={() => onDelete(id)} className="btn btn-error btn-xs ml-2">Delete</button>
      </div>
    );
  }