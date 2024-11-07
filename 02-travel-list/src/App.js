import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleRemoveItem(item) {
    setItems((items) => items.filter((i) => i.id !== item.id));
  }

  function handleIsPacked(item) {
    setItems((items) =>
      items.map((i) =>
        i.id === item.id ? { ...item, packed: !item.packed } : i
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onIsPacked={handleIsPacked}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🏝 Far Away 🧳</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = { description, quantity, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, num) => num + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>add</button>
    </form>
  );
}

function PackingList({ items, onRemoveItem, onIsPacked }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            onRemoveItem={onRemoveItem}
            onIsPacked={onIsPacked}
            key={item.id}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onRemoveItem, onIsPacked }) {
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

function Stats({ items }) {
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
