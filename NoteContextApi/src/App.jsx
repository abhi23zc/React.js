import React from "react";
import { useState } from "react";
import { NotesProvider } from "./contexts/NoteContext";
import { useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [notes, setNotes] = useState([]);

  function addNotes(note) {
    setNotes(prev => [{ id: Date.now(), ...note }, ...prev]);
  }

  function updateNotes(id, note) {
    setNotes((prev) => prev.map((prevNote) => (prevNote.id === id ? note : prevNote)));
  }

  function deleteNotes(id) {
    setNotes((prev) => prev.filter((prevNote) => prevNote.id !== id));
  }

  function toggleComplete(id) {
    setNotes((prev) => prev.map((prevNote) => {
      if (prevNote.id === id) {
        return { ...prevNote, completed: !prevNote.completed };
      }
      return prevNote;
    }));
  }

  useEffect(() => {
    const allNotes = JSON.parse(localStorage.getItem('notes'));
    if (allNotes?.length > 0) {
      setNotes(allNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesProvider value={{ addNotes, deleteNotes, updateNotes, toggleComplete, notes }}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {notes.map((note) => (
              <TodoItem key={note.id} todo={note} />
            ))}
          </div>
        </div>
      </div>
    </NotesProvider>
  );
}

export default App;
