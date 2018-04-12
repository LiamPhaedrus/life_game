import React, { Component }  from 'react';

const GridInfo = (props) => {
  // let image = ""
  // if (props.card) {
  //   image = <img src={props.card.image} />
  // }
  return (
    <div>
      <p>Height: {props.height}</p>
      <p>Width: {props.width}</p>
    </div>
  )
}

export default GridInfo
