
/*Goal
Build a form that:
Lets the user add new items with custom data.
Lets the user edit existing items, with the form pre-filled for that item.

- app - Main logic and state.
- item - to have as a reussable item component.
- itemForm - creating and updating the items.
- itemList - to display all the items.
*/

import React from "react";

function Item({ item, onDelete, onEdit }) {
  return (
    <li>
      {item.title}
      <button onClick={() => onEdit(item)}>✏️</button>
      <button onClick={() => onDelete(item.id)}>🗑️</button>
    </li>
  );
}

export default Item;