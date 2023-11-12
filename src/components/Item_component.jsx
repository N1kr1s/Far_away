const Item = ({
  id,
  description,
  quantity,
  packed,
  deleteItem,
  squareCheck,
}) => {
  return (
    <li>
      <input
        type='checkbox'
        onClick={() => {
          squareCheck(id);
        }}
      />
      <span style={packed ? { textDecoration: 'line-through' } : {}}>
        {`${quantity} ${description}`}
      </span>
      <button
        onClick={() => {
          deleteItem(id);
        }}
      >
        ❌
      </button>
    </li>
  );
};

export default Item;
