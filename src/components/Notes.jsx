import React from 'react';

const notes = [
    {
        key: 1,
        title: "Delegation",
        content:
            "Q. How many programmers does it take to change a light bulb? A. None – It’s a hardware problem"
    },
    {
        key: 2,
        title: "Loops",
        content:
            "How to keep a programmer in the shower forever. Show him the shampoo bottle instructions: Lather. Rinse. Repeat."
    },
    {
        key: 3,
        title: "Arrays",
        content:
            "Q. Why did the programmer quit his job? A. Because he didn't get arrays."
    },
    {
        key: 4,
        title: "Hardware vs. Software",
        content:
            "What's the difference between hardware and software? You can hit your hardware with a hammer, but you can only curse at your software."
    },
    {
        key: 5,
        title: "Dev and Nicolle got the yams",
        content:
            "I say this respectfully but they are next level and should be kept safe."
    }
];

const Notes = (props) => {
  return notes.map(note =>{
      return (
          < div key ={note.key} className='note'>
              <h1>{note.title}</h1>
              <p>{note.content}</p>
          </div>
      );
  })
};

export default Notes;