import React, {useState} from 'react';

function CreateArea() {
    const [note, setNote] = useState({
        title: '',
        content: ''
    })
    function handleChange(e) {
        e.preventDefault()

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
            <form className="create-note">
                <input name="title"  onChange={handleChange} values={note.title}  placeholder="title" />
                <textarea  name="content"  onChange={handleChange} values={note.content}  placeholder="Make a note" rows="3"/>
                <button>Add</button>
            </form>
        </div>
    )
}
export default CreateArea