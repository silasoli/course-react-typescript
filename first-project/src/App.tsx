import { useState } from "react";

interface StudentProps {
  name: string;
  age: string;
}

export default function App() {
  const [input, setInput] = useState("");
  const [age, setAge] = useState("");

  const [student, setStudent] = useState<StudentProps>();

  const [count, setCount] = useState<number>(0);

  function showStudent() {
    setStudent({
      name: input,
      age: age,
    });
  }

  function addCount() {
    setCount((currentValue) => currentValue + 1);
  }

  function removeCount() {
    if(count === 0) return;
    setCount((currentValue) => currentValue - 1);
  }

  return (
    <div>
      <h1>Conhecendo useState</h1>
      <input
        placeholder="Digite o nome"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <br />
      <br />
      <input
        placeholder="Digite sua idade"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <br />
      <button onClick={showStudent}>Mostrar Aluno</button>
      <hr />
      <h3>Bem vindo: {student?.name}</h3>
      <h3>idade: {student?.age}</h3>
      <hr />
      <br />
      <h1>Contador:</h1>
      <button onClick={addCount}>+</button> {count}
      <button onClick={removeCount}>-</button>
    </div>
  );
}
