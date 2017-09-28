import React, { Component } from 'react';

import data from '../data.json';
import Title from './Title.jsx';
import Label from './Label.jsx';
import FileTree from './FileTree.jsx';
import Footer from './Footer.jsx';
import './FileExplorer.css';

class FileExplorer extends Component {
  render() {
    return (
      <div className="file-explorer">
        <Title title="Title" />
        <Label />
        <FileTree data={data} />
        <Footer />
      </div>
    )
  }
}

export default FileExplorer;
