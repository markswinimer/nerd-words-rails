import React from 'react'

const WordInputField = props => {
  return(
    <label>{props.label}
      <input
        placeholder={props.placeholder}
        name={props.name}
        type='text'
        value={props.content}
      />
    </label>
  )
}
export default WordInputField
