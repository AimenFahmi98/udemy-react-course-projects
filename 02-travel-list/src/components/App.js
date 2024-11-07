import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

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

  function handleClearItems() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onRemoveItem={handleRemoveItem}
        onIsPacked={handleIsPacked}
        onClearItems={handleClearItems}
      />
      <Stats items={items} />
    </div>
  );
}
