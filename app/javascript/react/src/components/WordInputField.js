import React from 'react'

const WordInputField = props => {
  return(
    <label>
      <input
        placeholder={props.placeholder}
        className="wordListElement"
        name={props.name}
        onChange={props.handleDetails}
        type='text'
        id={props.id}
        value={props.value}
      />
    </label>
  )
}

export default WordInputField
