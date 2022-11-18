import { useState, useEffect } from 'react';
import ToDo from './components/ToDo';
import ToDoForm from './components/ToDoForm';
import {
  getAllNotes,
  deleteTask,
  addNewNote,
  patchTask,
} from './Services/NoteService';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const notes = await getAllNotes();
    setTodos(notes);
  }

  const deleteNote = async (noteId) => {
    await deleteTask(noteId);
    setTodos([...todos.filter((todo) => todo.id !== noteId)]);
  };

  const addTask = async (nameTask) => {
    if (nameTask.nameTask.length > 0) {
      const newItem = {
        idTime: new Date().getTime(),
        complete: nameTask.done,
        ...nameTask,
      };

      setTodos([...todos, newItem]);
      await addNewNote(newItem);
      const notes = await getAllNotes();
      setTodos(notes);
    }
  };

  const handleToggle = async (idTime, id) => {
    const [todoFilter] = todos.filter((todo) => todo.id === id);
    await patchTask({ ...todoFilter, complete: !todoFilter.complete }, id);

    setTodos([
      ...todos.map((todo) =>
        todo.idTime === idTime
          ? { ...todo, complete: !todo.complete }
          : { ...todo }
      ),
    ]);
  };

  return (
    <main className="container content">
      <div className="app">
        <header>
          <h1>Список задач: {todos.length}</h1>
        </header>
        <ToDoForm addTask={addTask} />
        {todos.map((todo) => {
          return (
            <ToDo
              todo={todo}
              key={todo.id}
              toggleTask={handleToggle}
              deleteNote={deleteNote}
              // patchNote={patchNote}
            />
          );
        })}
      </div>
    </main>
  );
}

export default App;

