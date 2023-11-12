import Item from './Item_component';

const PackingList = ({ initialItems, deleteItem, squareCheck }) => {
  return (
    <div className='list'>
      <ul className='list'>
        {initialItems.map((item) => (
          <Item
            {...item}
            key={item.id}
            deleteItem={deleteItem}
            squareCheck={squareCheck}
          />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
