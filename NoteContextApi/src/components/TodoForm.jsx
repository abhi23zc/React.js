import { useState } from "react";
import { UseNote } from "../contexts/NoteContext";

function TodoForm() {

    const {addNotes} = UseNote();

    const [note, setnote] = useState("")

    return (
        <form  className="flex">
            <input
                onChange={(e)=>{
                    setnote(e.target.value) 
                }}
                value={note}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button 
            onClick={(e)=>{
                e.preventDefault()
                if(!note) return;  
                addNotes({note, completed:false})
                setnote("") 
 
            }}
            type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;

