import { useState } from 'react';
import categoryData from '../assets/categoryData';

function AddItemForm({ stores, onAddItem }) {
  const [productName, setProductName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [formStore, setFormStore] = useState('Lidl');
  const [category, setCategory] = useState('Dairy');

  function handleSubmit(e) {
    e.preventDefault();
    if (productName.trim() === '') {
      alert('Please enter a product name');
      return;
    }
    onAddItem(productName, formStore, quantity, category);
    setProductName('');
    setQuantity(1);
    setCategory('Dairy');
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Create your shopping list</legend>

        <label htmlFor='product'>Product name:</label>
        <input
          name='product'
          type='text'
          id='product'
          placeholder='milk'
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />

        <label htmlFor='quantity'>Quantity:</label>
        <input
          name='quantity'
          type='number'
          id='quantity'
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        />

        <select
          value={formStore}
          onChange={(e) => setFormStore(e.target.value)}>
          {stores.map((store) => (
            <option key={store} value={store}>
              {store}
            </option>
          ))}
        </select>

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categoryData.map((cat) => (
            <option key={cat.categoryName} value={cat.categoryName}>
              {cat.emoji} {cat.categoryName}
            </option>
          ))}
        </select>

        <button type='submit'>Add to list</button>
      </fieldset>
    </form>
  );
}

export default AddItemForm;
