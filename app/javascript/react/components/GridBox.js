import React, { Component }  from 'react';

class GridBox extends Component {
  constructor (props) {
    super(props)
    this.handleBoxClick = this.handleBoxClick.bind(this)
  }

  handleBoxClick (event) {
    event.preventDefault()
    this.props.handleSwitch(this.props.id[0], this.props.id[1])
  }

  render () {

    return (
      <span className={this.props.status} onClick={this.handleBoxClick}>
      </span>
    )
  }
}

export default GridBox
