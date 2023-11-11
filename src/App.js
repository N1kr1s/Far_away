import Form from "./components/Form_component";
import Logo from "./components/Logo_component";
import PackingList from "./components/PackingList_component";
import Stats from "./components/Stats_component";
import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];


function App() {
  const [formValue, setformValue] = useState('')
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList initialItems={initialItems} />
      <Stats />
    </div>
  );
}

export default App;

