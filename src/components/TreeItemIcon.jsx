import React, { Component } from 'react';

class TreeItemIcon extends Component {
  treeItemClass() {
    if (this.props.type === 'folder') {
      return this.props.private ? 'private-folder-icon' : 'folder-icon';
    } else if (this.props.type === 'file') {
      return 'file-icon';
    }

    return '';
  }

  render() {
    return (
      <span className={`icons ${this.treeItemClass()}`}>
      </span>
    )
  }
}

export default TreeItemIcon;
