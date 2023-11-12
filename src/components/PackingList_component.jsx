import Item from './Item_component';
import { useState } from 'react';

const PackingList = ({
  initialItems,
  deleteItem,
  squareCheck,
  clearItemsList,
}) => {
  const [sortBy, setSortBy] = useState('input');

  let sortedItems;

  if (sortBy === 'input') sortedItems = initialItems;
  if (sortBy === 'description')
    sortedItems = [...initialItems].sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  if (sortBy === 'packed')
    sortedItems = [...initialItems].sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );

  return (
    <div className='list'>
      <ul className='list'>
        {sortedItems.map((item) => (
          <Item
            {...item}
            key={item.id}
            deleteItem={deleteItem}
            squareCheck={squareCheck}
          />
        ))}
      </ul>
      <div className='actions'>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value='input'>Sort by input order</option>
          <option value='description'>Sort by description</option>
          <option value='packed'>Sort by packed status</option>
        </select>
        <button onClick={() => clearItemsList()}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
