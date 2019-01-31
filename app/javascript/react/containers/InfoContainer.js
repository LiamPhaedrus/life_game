import React, { Component }  from 'react'
import InfoLine from '../components/InfoLine'
import SomeButton from '../components/SomeButton'

class InfoContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      changing: false
    }

    this.changeButton = this.changeButton.bind(this)
  }

  changeButton () {
    let isChanging = this.state.changing
    this.setState({
      changing: !isChanging
    })
  }

  render () {
    let canChangeSize = !this.props.isRunning && this.state.changing

    return(
      <div className="grid_info">
        <InfoLine
          key={"heightLine" + 1}
          infoType="height"
          size={this.props.height}
          canChangeSize={canChangeSize}
        />
        <InfoLine
          key={"widthLine" + 2}
          infoType={"width"}
          size={this.props.width}
          canChangeSize={canChangeSize}
        />

        <SomeButton
          key={"change" + 3}
          words={this.state.changing ? "Cancel" : "Change Size"}
          disabled={this.props.isRunning}
          handleClick={this.changeButton}
        />
      </div>
    )
  }
}

export default InfoContainer
