import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import TrashIcon from '../trash.svg';

class Trash extends Component {
  static propTypes = {
    isTrashVisible: PropTypes.bool,
    onTrashClicked: PropTypes.func,
  }

  render() {
    let className = 'bin'
    if (!this.props.isTrashVisible) {
      className += ' empty';
    }

    let clickHandler;
    if (this.props.isTrashVisible) {
      clickHandler = this.props.onTrashClicked;
    }

    return (
      <div
        className={className}
        onClick={clickHandler}>
        <img src={ TrashIcon } alt="Trash" className="trash"></img>
      </div>
    );
  }
}

export default Trash;
