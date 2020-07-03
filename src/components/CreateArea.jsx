import React from "react";
import { useState } from "react";

function CreateArea() {
    // Use hooks to setup component state
   const [note, setNote] = useState({
        title: "",
        content: ""
   });
   function hadnleChange(e){
    //First, destructure the event object
    const {name, value} = e.target;

    setNote(prevNote => {
        return {
            ...prevNote,
            [name]: value
        }
    })
   }
    return (
        <div>
            <form>
                <input name="title" onChange={hadnleChange}value={note.title} placeholder="Title" />
                <textarea name="content" onChange={hadnleChange}value={note.content} placeholder="Take a note..." rows="3" />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
