export default function Item({ item, onRemoveItem, onIsPacked }) {
  return (
    <li>
      <input type="checkbox" onClick={() => onIsPacked(item)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onRemoveItem(item)}>❌</button>
    </li>
  );
}
