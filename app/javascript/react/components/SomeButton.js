import React from 'react';

const someButton = (props) => {
  let disabled = false || props.disabled

  return(
    <button className="button" onClick={props.handleClick} disabled={disabled}>
      {props.words}
    </button>
  )
}

export default someButton;
