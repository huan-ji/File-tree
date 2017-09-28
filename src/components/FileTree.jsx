import React, { Component } from 'react';
import OpenToggleIcon from './OpenToggleIcon.jsx';
import TreeItemIcon from './TreeItemIcon.jsx';

class FileTree extends Component {
  constructor(props) {
    super(props)
    this.state = {
      structure: this.props.data,
      hoverRow: undefined,
      selectedRow: undefined
    };

    this.toggleFolder = this.toggleFolder.bind(this);
    this.onHover = this.onHover.bind(this);
    this.stopHover = this.stopHover.bind(this);
    this.onSelect = this.onSelect.bind(this);
  }

  toggleFolder(folder, event) {
    event.stopPropagation();
    folder.open = !folder.open;

    this.setState({ structure: this.state.structure });
  }

  onHover(child, event) {
    event.stopPropagation();

    child.hover = true;
    if (child !== this.state.hoverRow) {
      this.state.hoverRow ? this.state.hoverRow.hover = false : undefined;
      this.state.hoverRow = child;
    }

    this.setState({ structure: this.state.structure });
  }

  stopHover(child, event) {
    child.hover = false;
    return this.setState({ structure: this.state.structure });
  }

  onSelect(child, event) {
    event.stopPropagation();

    this.state.selectedRow ? this.state.selectedRow.selected = false : undefined;
    this.state.selectedRow = child;
    child.selected = true;

    this.setState({ structure: this.state.structure });
  }

  renderChildren(children) {
    return children.map((child, i) => {
      if (child.type === 'folder') {
        return (
          <TreeRow
            child={child}
            index={i}
            toggleFolder={this.toggleFolder}
            renderChildren={this.renderChildren}
            onHover={this.onHover}
            stopHover={this.stopHover}
            onSelect={this.onSelect}
          />
        )
      } else if (child.type ==='file'){
        return (
          <TreeRow
            child={child}
            index={i}
            onHover={this.onHover}
            stopHover={this.stopHover}
            onSelect={this.onSelect}
          />
        )
      }

      return undefined;
    })
  }

  render() {
    return (
      <div className="file-tree">
        {this.renderChildren(this.state.structure.children)}
      </div>
    )
  }
}

class TreeRow extends Component {
  backgroundColor() {
    if (this.props.child.hover) {
      return 'skyblue';
    } else if (this.props.child.selected) {
      return '#337ab7';
    }

    return '';
  }

  render() {
    const child = this.props.child;

    return (
      <div
        key={child.name + this.props.index}
        className="tree-row"
        style={{
          backgroundColor: this.backgroundColor()
        }}
        onClick={e => this.props.onSelect(child, e)}
        onMouseOver={e => this.props.onHover(child, e)}
        onMouseOut={e => this.props.stopHover(child, e)}
      >
        <div>
          {
            child.type === 'folder' ?
              <OpenToggleIcon
                open={child.open}
                selected={child.selected}
                hover={child.hover}
                toggleFolder={e => this.props.toggleFolder(child, e)}
              /> :
            undefined
          }
          <TreeItemIcon type={child.type} private={child.privates} />
          <span
            style={{ color: child.hover || child.selected ? 'white' : 'black'}}
          >
            {child.name}
          </span>
        </div>
        {child.open && child.children ? this.props.renderChildren(child.children) : undefined}
      </div>
    )
  }
}

export default FileTree;
