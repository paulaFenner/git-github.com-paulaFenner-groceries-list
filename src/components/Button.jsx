function Button({ onAdd }) {
  return (
    <button onClick={onAdd} className='add-item-btn'>
      +
    </button>
  );
}

export default Button;
