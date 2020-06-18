import React, {useState} from 'react';

function CreateArea() {
    const [note, setNote] = useState({
        title: '',
        content: ''
    })

    return (
        <div>
            <form action="">
                <input name="title"  values={note.title}  placeholder="title" />
                <textarea  name="content"  values={note.content}  placeholder="Make a note" rows="3"/>
                <button>Add</button>
            </form>
        </div>
    )
}
export default CreateArea