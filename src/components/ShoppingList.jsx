import categoryData from '../assets/categoryData';

function ShoppingList({ items, selectedStore, onToggleBought, onDeleteItem }) {
  const filteredItems = items.filter((item) => item.store === selectedStore);

  function getCategoryEmoji(categoryName) {
    const category = categoryData.find(
      (cat) => cat.categoryName === categoryName,
    );
    return category ? category.emoji : '❗';
  }

  return (
    <ul>
      {filteredItems.map((item) => (
        <li
          key={item.id}
          className={`shopping-list-item ${item.bought ? 'bought' : ''}`}>
          {getCategoryEmoji(item.category)}
          <input
            type='checkbox'
            checked={item.bought}
            onChange={() => onToggleBought(item.id)}
          />
          {item.name} ({item.quantity})
          <button
            className='delete-button'
            onClick={() => {
              if (window.confirm(`Delete "${item.name}"?`)) {
                onDeleteItem(item.id);
              }
            }}>
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ShoppingList;
