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
import Item from "./Item";  

function ItemList({ items, onDelete, onEdit }) {  
  if (items.length === 0) return <p>No items yet.</p>;

  return (
    <ul>
      {items.map((item) => (
        <Item  
          key={item.id}
          item={item}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default ItemList;
