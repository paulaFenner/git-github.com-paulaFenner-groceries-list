function Dashboard({ stores, items, onSelectedStore }) {
  const storeData = stores.map((store) => {
    const count = items.filter((item) => item.store === store).length;
    return { name: store, count: count };
  });

  return (
    <>
      <h2>🛒 My shopping lists </h2>

      <section className='dashboard-grid'>
        {storeData.map((store) => (
          <div
            key={store.name}
            className='store-card'
            onClick={() => {
              onSelectedStore(store.name);
            }}>
            <h3>{store.name}</h3>
            <p>{store.count} items</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Dashboard;
