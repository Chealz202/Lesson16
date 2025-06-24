/*Goal
Build a form that:
Lets the user add new items with custom data.
Lets the user edit existing items, with the form pre-filled for that item.

- app - Main logic and state.
- item - to have as a reussable item component.
- itemForm - creating and updating the items.
- itemList - to display all the items.
*/

import React, { useState } from "react";
import ItemForm from "./ItemForm";
import ItemList from "./ItemList";

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const handleAddOrUpdate = (item) => {
    if (editingItem) {
      setItems((prev) =>
        prev.map((it) => (it.id === item.id ? item : it))
      );
      setEditingItem(null);
    } else {
      setItems([...items, { ...item, id: Date.now() }]);
    }
  };

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <ItemForm onSubmit={handleAddOrUpdate} editingItem={editingItem} />
      <ItemList
        items={items}
        onDelete={handleDelete}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;
