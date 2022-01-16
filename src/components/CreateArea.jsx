import React from "react";
import { useState } from "react";

function CreateArea(props) {
  // Use hooks to setup component state.
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function handleChange(e) {
    //First, destructure the event object to get the values you want
    const { name, value } = e.target;

    setNote((prevNote) => {
      console.log(note)
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
// on submit
  function submitNote(e) {
    e.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
