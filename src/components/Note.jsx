import React from "react";

function Note(props) {
    // Get access to the id from <Note /> and specify that the note with
    // that id is to be deleted
    function handleClick() {
        props.onDelete(props.id)
    }
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={handleClick}>DELETE</button>
        </div>
    );
}

export default Note;
