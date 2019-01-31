import React, { Component }  from 'react';

const GridInfo = (props) => {
  // let image = ""
  // if (props.card) {
  //   image = <img src={props.card.image} />
  // }
  return (
    <div className='grid_info'>
      <span className='height'>Height: {props.height}</span>
      <span className='width'>Width: {props.width}</span>
    </div>
  )
}

export default GridInfo
