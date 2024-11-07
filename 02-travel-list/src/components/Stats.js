export default function Stats({ items }) {
  const nbItems = items.length;
  const nbPackedItems = items.filter((i) => i.packed).length;
  const percentage = Math.round((nbPackedItems / nbItems) * 100);

  if (nbItems === 0)
    return (
      <footer className="stats">
        <em>Start by adding some items to your list!</em>
      </footer>
    );

  if (nbItems === nbPackedItems)
    return (
      <footer className="stats">
        <em>You got everything! You are good to go ✈️</em>
      </footer>
    );
  else
    return (
      <footer className="stats">
        <em>
          🧳 You have {nbItems} items on your list, and you already packed{" "}
          {nbPackedItems} ({percentage}%)
        </em>
      </footer>
    );
}
