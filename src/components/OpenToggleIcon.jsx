import React, { Component } from 'react';

class OpenToggleIcon extends Component {
  selectedOrHovered() {
    return this.props.selected || this.props.hover
  }

  iconClass() {
    if (this.props.open) {
      return this.selectedOrHovered() ? "open-icon-white" : "open-icon-black";
    }

    return this.selectedOrHovered() ? "close-icon-white" : "close-icon-black";
  }

  render() {
    return (
      <div
        className={`icons ${this.iconClass()}`}
        onClick={e => this.props.toggleFolder(e)}
      />
    )
  }
}

export default OpenToggleIcon;
