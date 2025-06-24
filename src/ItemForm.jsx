/*Goal
Build a form that:
Lets the user add new items with custom data.
Lets the user edit existing items, with the form pre-filled for that item.

- app - Main logic and state.
- item - to have as a reussable item component.
- itemForm - creating and updating the items.
- itemList - to display all the items.
*/




import React, { useState, useEffect } from "react";

function ItemForm({ onSubmit, editingItem }) {
  const [title, setTitle] = useState("");

  useEffect(() => {
    if (editingItem) {
      setTitle(editingItem.title);
    } else {
      setTitle("");
    }
  }, [editingItem]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newItem = editingItem
      ? { ...editingItem, title }
      : { title };

    onSubmit(newItem);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit">
        {editingItem ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default ItemForm;
