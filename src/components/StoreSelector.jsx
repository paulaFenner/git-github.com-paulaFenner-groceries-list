// This component was previously used as a dropdown menu for the user to select which store list they wanted to display in the screen.
// Now the user does the same action by clicking in the store card displayed in the dashboard

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
