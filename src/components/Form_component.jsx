const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select name='' id=''>
        {Array(20)
          .fill(1)
          .map((_, ind) => (
            <option value={ind + 1} key={ind}>
              {ind + 1}
            </option>
          ))}
      </select>
      <input type='text' placeholder='item...' />
      <button>Add</button>
    </form>
  );
};

export default Form;
