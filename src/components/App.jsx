import React, { Component } from 'react';
import Header from './Header.jsx';
import CreateArea from './CreateArea';
import Note from './Note';
import Footer from './Footer.jsx';

class App extends Component {
    state = {
        notes: [{ company: 'dummy', content: 'bummy' }]
    }

    // Add a new note to state. Pass down through props
    addNote = (newNote) => {
        this.setState({
            notes: [...this.state.notes, newNote]
        })
        console.log(this.state)
    }
    // Remove a specified note! Pass this method down through props
    deleteNote = (id) => {
        this.setState({
            notes: this.state.notes.filter((noteItem, index) => {
                return index !== id;
            })
        })
    }

    render() {
        return (
            <div>
                <Header />
                <CreateArea
                    onAdd={this.addNote} />

                {this.state.notes.map((noteItem, index) => {
                    return <Note
                        key={index}
                        id={index}
                        title={noteItem.title}
                        content={noteItem.content}
                        onDelete={this.deleteNote} />
                })}
                <Footer />
            </div>
        );
    }
}

export default App;