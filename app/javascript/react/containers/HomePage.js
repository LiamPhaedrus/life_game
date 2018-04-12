
import React, { Component }  from 'react'
import GridInfo from '../components/GridInfo'
import SomeButton from '../components/SomeButton'
import GridContainer from './GridContainer'

class HomePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      running: false,
      cleanStart: true,
      height: 0,
      width: 0,
      grid: []
    }
    this.setGrid = this.setGrid.bind(this)
    this.settingUp = this.settingUp.bind(this)
    this.buttonStart = this.buttonStart.bind(this)
    this.buttonReset = this.buttonReset.bind(this)
  }

  setGrid (height, width) {
    if (this.state.grid.length !== height || this.state.grid[0].length !== width) {
      let newGrid = []
      for (var i = 0; i < height; i++) {
        let newRow = []
        for (var x = 0; x < width; x++) {
          newRow.push(false)
        }
        newGrid.push(newRow)
      }
      this.setState({ grid: newGrid})
      console.log(newGrid)
    }
  }

  settingUp () {
    let height
    let width
    height = (this.state.height === 0) ? 20:height
    width = (this.state.width === 0) ? 20:width
    this.setGrid(height, width)
    this.setState({
      height: height,
      width: width
    })
  }

  buttonStart () {
    let isRunning = this.state.running
    this.setState({
      running: !isRunning,
      cleanStart: false
    })
  }

  buttonReset () {
    this.setState({
      running: false,
      cleanStart: true
    })
  }

  componentWillMount () {
    if (this.state.running === false && this.state.cleanStart === true) {
      this.settingUp()
    }
  }

  render () {

    return (
      <div>
        <h1>Game of Life</h1>
        <GridInfo
          height={this.state.height}
          width={this.state.width}
        />
        <SomeButton
          key={"start" + 1}
          words="Start"
          handleClick={this.buttonStart}
        />
        <SomeButton
          key={"reset" + 2}
          words="Reset"
          handleClick={this.buttonStart}
        />
        <GridContainer
          grid={this.state.grid}
        />
      </div>
    )
  }
}

export default HomePage
