import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import "./App.css";

export default function App() {
  const inputRef = useRef<HTMLInputElement>(null);
  const firstRender = useRef(true);

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState<string[]>([]);
  const [editTask, setEditTask] = useState({
    enable: false,
    task: "",
  });

  useEffect(() => {
    const tasksSaved = localStorage.getItem("taskList");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    if (tasksSaved) setTasks(JSON.parse(tasksSaved));
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    localStorage.setItem("taskList", JSON.stringify(tasks));
  }, [tasks]);

  const handleRegister = useCallback(() => {
    if (!input) return alert("Preencha o nome da tarefa");

    if(verifyItem(input)) return alert("Tarefa já registrada");

    if (editTask.enable) return handleSaveEdit();

    setTasks((tasks) => [...tasks, input]);
    setInput("");
  }, [tasks, input]);

  function verifyItem(item: string): boolean {
    return tasks.includes(item);
  }

  function handleDelete(item: string) {
    const tasksWithoutDeleted = tasks.filter((tasks) => tasks !== item);
    setTasks(tasksWithoutDeleted);
  }

  function handleEdit(item: string) {
    inputRef.current?.focus();
    setInput(item);
    setEditTask({
      enable: true,
      task: item,
    });
  }

  function handleSaveEdit() {
    const findTask = tasks.findIndex((task) => task === editTask.task);
    const allTasks = [...tasks];
    allTasks[findTask] = input;
    setTasks(allTasks);
    setEditTask({
      enable: false,
      task: "",
    });
    setInput("");
  }

  const qtyTasks = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  return (
    <div>
      <h1>Task List</h1>
      <input
        type="text"
        placeholder="Digite o nome da tarefa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        ref={inputRef}
      />

      <button onClick={handleRegister}>
        {editTask.enable ? "Atualizar" : "Adicionar"} tarefa
      </button>

      <hr />

      <strong>Você tem {qtyTasks} tarefas</strong>
      <br />
      <br />

      {tasks.map((item, index) => (
        <section key={item}>
          <span>{item}</span>
          <button onClick={() => handleEdit(item)}>Editar</button>
          <button onClick={() => handleDelete(item)}>Excluir</button>
        </section>
      ))}
    </div>
  );
}
