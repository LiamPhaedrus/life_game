
import React, { Component }  from 'react'
import GridInfo from '../components/GridInfo'
import SomeButton from '../components/SomeButton'
import GridContainer from './GridContainer'
import InfoContainer from './InfoContainer'

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
    this.handleSwitch = this.handleSwitch.bind(this)
    this.gameLogic = this.gameLogic.bind(this)
    this.livingNeighborCount = this.livingNeighborCount.bind(this)
  }

  setGrid (height, width) {
    let newGrid = []
    for (var i = 0; i < height; i++) {
      let newRow = []
      for (var x = 0; x < width; x++) {
        newRow.push(false)
      }
      newGrid.push(newRow)
      this.setState({ grid: newGrid})
    }
  }

  settingUp () {
    let height
    let width
    height = (this.state.height === 0) ? 40 : this.state.height
    width = (this.state.width === 0) ? 40 : this.state.height
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
    this.gameLogic()
  }

  buttonReset () {
    this.setState({
      running: false,
      cleanStart: true
    })
    this.settingUp()
  }

  handleSwitch (row, spot) {
    let newGrid = this.state.grid
    let cellState = newGrid[row][spot]
    newGrid[row][spot] = !cellState
    this.setState({ grid: newGrid})
  }

  gameLogic () {
    let newGrid = []
    for (var row = 0; row < this.state.height; row++) {
      newGrid.push([])
      for (var spot = 0; spot < this.state.width; spot++) {
        let cellState = this.state.grid[row][spot]
        let nCount = this.livingNeighborCount(row, spot)
        if (cellState && (nCount < 2 || nCount > 3)) {
          newGrid[row][spot] = !cellState
        } else if (!cellState && nCount === 3) {
          newGrid[row][spot] = !cellState
        } else {
          newGrid[row][spot] = cellState
        }
      }
    }
    this.setState({ grid: newGrid })
  }

  livingNeighborCount (row, spot) {
    let uRow = (row === 0) ? (this.state.height - 1) : (row - 1)
    let dRow = (row === this.state.height - 1) ? 0 : (row + 1)
    let lSpot = (spot === 0) ? (this.state.width - 1) : (spot - 1)
    let rSpot = (spot === this.state.width - 1) ? 0 : (spot + 1)

    let countables = [
      this.state.grid[uRow][spot],
      this.state.grid[uRow][lSpot],
      this.state.grid[uRow][rSpot],
      this.state.grid[row][lSpot],
      this.state.grid[row][rSpot],
      this.state.grid[dRow][spot],
      this.state.grid[dRow][lSpot],
      this.state.grid[dRow][rSpot]
    ]

    let count = countables.filter(item => item).length
    return count
  }

  componentWillMount () {
    if (this.state.running === false && this.state.cleanStart === true) {
      this.settingUp()
    }
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.running) {
        this.gameLogic()
      }
    }, 500);
  }

  render () {

    return (
      <div>
        <h1>Game of Life</h1>
        <InfoContainer
          isRunning={this.state.running}
          height={this.state.height}
          width={this.state.width}
        />
        <SomeButton
          key={"start" + 1}
          words={this.state.running ? "Stop" : "Start"}
          handleClick={this.buttonStart}
        />
        <SomeButton
          key={"reset" + 2}
          words="Reset"
          handleClick={this.buttonReset}
        />
        <GridContainer
          grid={this.state.grid}
          handleSwitch={this.handleSwitch}
        />
      </div>
    )
  }
}

export default HomePage
