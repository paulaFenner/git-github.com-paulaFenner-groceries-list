function Modal({ onClose, children }) {
  return (
    <>
      <dialog className='modal-overlay'>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
          <button onClick={onClose}>X</button>
          {children}
        </div>
      </dialog>
    </>
  );
}

export default Modal;
