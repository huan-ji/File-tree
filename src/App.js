import React, { Component } from 'react';
import './App.css';
import FileExplorer from './components/FileExplorer.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <FileExplorer />
      </div>
    );
  }
}

export default App;
