import { useState } from "react";
import { createContext, useContext } from "react";

export const NoteContext = createContext({
  notes : [
    {
      id:1,
      note:"test",
      completed: false
    }
  ],

  addNotes : (note) => {},
  updateNotes : (id, note) => {},
  deleteNotes : (id) => {},
  toggleComplete : (id) => {},
});

export const UseNote = () => {
  return useContext(NoteContext);
};



export const NotesProvider = NoteContext.Provider