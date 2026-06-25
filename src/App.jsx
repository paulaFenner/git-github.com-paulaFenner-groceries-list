import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ShoppingList from './components/ShoppingList';
import AddItemForm from './components/AddItemForm';
import Dashboard from './components/Dashboard';
import Button from './components/Button';
import Modal from './components/Modal';

function App() {
  const stores = ['Lidl', 'Continente', 'Pingo Doce', 'Mercado', 'Others'];

  const [items, setItems] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('shoppingList'));
      return saved?.items ?? [];
    } catch {
      return [];
    }
  });

  const [selectedStore, setSelectedStore] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('shoppingList'));
      return saved?.selectedStore ?? 'Lidl';
    } catch {
      return 'Lidl';
    }
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const dataToSave = {
      items: items,
      selectedStore: selectedStore,
    };
    localStorage.setItem('shoppingList', JSON.stringify(dataToSave));
  }, [items, selectedStore]); // This runs when EITHER items or selectedStore changes

  function toggleBought(id) {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item,
      ),
    );
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  function addItem(name, store, quantity, category) {
    setItems((prevItems) => [
      ...prevItems,
      {
        id: uuidv4(),
        name: name,
        store: store,
        bought: false,
        quantity: quantity,
        category: category,
      },
    ]);
  }

  function deleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <>
      <Dashboard
        stores={stores}
        items={items}
        onSelectedStore={setSelectedStore}
        selectedStore={selectedStore}
      />
      <ShoppingList
        items={items}
        selectedStore={selectedStore}
        onToggleBought={toggleBought}
        onDeleteItem={deleteItem}
      />
      <Button onAdd={toggleModal} />
      {isModalOpen && (
        <Modal onClose={toggleModal}>
          <AddItemForm stores={stores} onAddItem={addItem} />
        </Modal>
      )}
    </>
  );
}

export default App;
