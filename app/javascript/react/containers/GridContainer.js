import React, { Component }  from 'react'
import GridBox from '../components/GridBox'

class GridContainer extends Component {
  constructor (props) {
    super(props)
    this.renderRow = this.renderRow.bind(this)
    this.renderFullGrid = this.renderFullGrid.bind(this)
  }

  renderRow (row, num) {
    let aGridRow = []

    for (var i = 0; i < row.length; i++) {
      let id = [num, i].join("_")
      let deadOrAlive = (row[i]) ? 'alive':'dead'

      aGridRow.push(
        <GridBox
          key={'box' + id}
          status={deadOrAlive}
          id={[num, i]}
          handleSwitch={this.props.handleSwitch}
        />
      )

    }
    return aGridRow
  }

  renderFullGrid (grid) {
    let gridRows = []

    for (var x = 0; x < grid.length; x++) {
      gridRows[x] = <div className='row' key={'row' + x}>{this.renderRow(grid[x], x)}</div>
    }

    return gridRows
  }

  // let fullGrid = this.renderFullGrid(this.props.grid).map(row => {
  //   <div className
  // })
  render () {

    return(
      <div className="board">
        {this.renderFullGrid(this.props.grid)}
      </div>
    )
  }
}

export default GridContainer
