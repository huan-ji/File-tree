import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div className="title">
        {this.props.title}
        <div className="close icons" />
      </div>
    )
  }
}

export default Title;
