import React from "react";
import { useState } from "react";

function CreateArea(props) {
  // Use hooks to setup component state!
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function hadnleChange(e) {
    //First, destructure the event object
    const { name, value } = e.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

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
          onChange={hadnleChange}
          value={note.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={hadnleChange}
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
