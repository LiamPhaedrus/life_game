import React, { Component }  from 'react';
import SomeButton from '../components/SomeButton'

const InfoLine = (props) => {
  // let image = ""
  // if (props.card) {
  //   image = <img src={props.card.image} />
  // }

  let showString = props.infoType.charAt(0).toUpperCase() + props.infoType.slice(1)
  // let textLine = <span>{showString}: {props.size}</span>

  let toShow = <span>{showString}: {props.size}</span>
  if (props.canChangeSize) {
    toShow = <span>
              <label>{showString}: </label>
              <input name={props.infoType} type="number" min="1" max="100" value={props.size}/>
            </span>
  }



  return (
    <div className={props.infoType}>
      {toShow}
    </div>
  )
}

export default InfoLine
