import Item from './Item_component';

const PackingList = ({ initialItems }) => {
  return (
    <div className='list'>
      <ul className='list'>
        {initialItems.map((item) => (
          <Item {...item} key={item.id} />
        ))}
      </ul>
    </div>
  );
};

export default PackingList;
