function StoreSelector({ stores, value, onChange }) {
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
      {stores.map((store) => (
        <option key={store} value={store}>
          {store}
        </option>
      ))}
    </select>
  );
}

export default StoreSelector;
