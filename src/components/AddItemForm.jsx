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
        <legend>✨ Add New Item</legend>

        <div className='form-group'>
          <label htmlFor='product'>Product name:</label>
          <input
            name='product'
            type='text'
            id='product'
            placeholder='milk'
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
        </div>

        <div className='form-row'>
          <div className='form-group'>
            <label htmlFor='quantity'>Quantity:</label>
            <input
              name='quantity'
              type='number'
              id='quantity'
              value={quantity}
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
          </div>
          <div className='form-group'>
            <label htmlFor='store'>Store:</label>
            <select
              name='store'
              value={formStore}
              onChange={(e) => setFormStore(e.target.value)}>
              {stores.map((store) => (
                <option key={store} value={store}>
                  {store}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className='form-group'>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            {categoryData.map((cat) => (
              <option key={cat.categoryName} value={cat.categoryName}>
                {cat.emoji} {cat.categoryName}
              </option>
            ))}
          </select>
        </div>

        <button type='submit' className='add-item-btn small'>
          + Add to list
        </button>
      </fieldset>
    </form>
  );
}

export default AddItemForm;
