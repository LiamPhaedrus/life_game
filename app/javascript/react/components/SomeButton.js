import React from 'react';

const someButton = (props) => {
  return(
    <button className="button" onClick={props.handleClick}>
      {props.words}
    </button>
  )
}

export default someButton;
