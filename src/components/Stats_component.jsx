const Stats = ({ items }) => {
  const alreadyPacked = () => {
    let count = 0;
    items.forEach((item) => {
      if (item.packed === true) count++;
    });
    return count;
  };

  if (!items.length)
    return (
      <p className='stats'>
        <em>Start adding some items to your packing list ✅</em>
      </p>
    );

  return (
    <footer className='stats'>
      <em>{`You have ${
        items.length
      } items on yor list, and you already packed ${alreadyPacked()} (${
        items.length ? Math.round((alreadyPacked() / items.length) * 100) : 0
      })%`}</em>
    </footer>
  );
};

export default Stats;
