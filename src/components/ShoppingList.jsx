import categoryData from '../assets/categoryData';

function ShoppingList({ items, selectedStore, onToggleBought, onDeleteItem }) {
  const filteredItems = items.filter((item) => item.store === selectedStore);

  function getCategoryEmoji(categoryName) {
    const category = categoryData.find(
      (cat) => cat.categoryName === categoryName,
    );
    return category ? category.emoji : '❗';
  }
  if (filteredItems.length === 0) {
    return (
      <div className='empty-list'>
        <span className='empty-list-icon'>📝</span>
        <p className='empty-list-title'>Your shopping list is empty</p>
        <p className='empty-list-description'>
          Start by adding your first item!
        </p>
      </div>
    );
  }

  return (
    <ul>
      {filteredItems.map((item) => (
        <li
          key={item.id}
          className={`shopping-list-item ${item.bought ? 'bought' : ''}`}>
          <span className='item-emoji'>{getCategoryEmoji(item.category)}</span>
          <span className='item-name'>{item.name}</span>
          <span className='item-quantity'>{item.quantity}</span>
          <input
            className='item-checkbox'
            type='checkbox'
            checked={item.bought}
            onChange={() => onToggleBought(item.id)}
          />
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
