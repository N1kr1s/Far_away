import Form from "./components/Form_component";
import Logo from "./components/Logo_component";
import PackingList from "./components/PackingList_component";
import Stats from "./components/Stats_component";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [option, setOption] = useState(1)
  const [input, setInput] = useState('')
  const [items, setItems] = useState([])

  const addToItems = () => {
    if (!input) return;

    setItems([...items, { id: uuidv4(), description: input, quantity: option, packed: false }])

    setInput('')
  }

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

  const squareCheck = (id) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, packed: !item.packed } : item
    ))
  }



  return (
    <div className="app">
      <Logo />
      <Form setOption={setOption} option={option} setInput={setInput} input={input} addToItems={addToItems} />
      <PackingList initialItems={items} deleteItem={deleteItem} squareCheck={squareCheck} />
      <Stats />
    </div>
  );
}

export default App;

