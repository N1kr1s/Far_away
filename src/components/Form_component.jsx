const Form = ({ setInput, input, setOption, option, addToItems }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    addToItems();
  };

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select
        value={option}
        onChange={(e) => setOption(Number(e.target.value))}
      >
        {Array(20)
          .fill(1)
          .map((_, ind) => (
            <option value={ind + 1} key={ind}>
              {ind + 1}
            </option>
          ))}
      </select>
      <input
        type='text'
        placeholder='item...'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
};

export default Form;
