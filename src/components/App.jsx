import React, { Component } from 'react';
import Header from './Header.jsx'
import Notes from './Notes'
import Footer from './Footer.jsx';

class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Notes />
                <Footer />
            </div>
        );
    }
}

export default App;