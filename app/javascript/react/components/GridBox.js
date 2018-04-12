import React, { Component }  from 'react';

class GridBox extends Component {
  constructor (props) {
    super(props)
    this.handleBoxClick = this.handleBoxClick.bind(this)
  }

  handleBoxClick (event) {
    event.preventDefault()
    console.log(this.props.id)
  }

  render () {

    return (
      <div className={this.props.status} onClick={this.handleBoxClick}>
      </div>
    )
  }
}

export default GridBox
