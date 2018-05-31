import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import TrashIcon from '../trash.svg';

class Trash extends Component {
  static propTypes = {
    isTrashVisible: PropTypes.bool,
    onTrashClicked: PropTypes.func,
  }

  clickHandler = () => {
    if (this.props.isTrashVisible) {
      this.props.onTrashClicked();
    }
  }

  render() {
    let className = 'bin'
    if (!this.props.isTrashVisible) {
      className += ' empty';
    }

    return (
      <div
        className={className}
        onClick={this.clickHandler}>
        <img src={ TrashIcon } alt="Trash" className="trash"></img>
      </div>
    );
  }
}

export default Trash;
