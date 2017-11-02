import React from 'react'

const WordInputField = props => {
  return(
    <label>{props.label}
      <input
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.handleChange}
        type='text'
        id={props.id}
        value={props.content}
        style={{margin: 0}}
      />
    </label>
  )
}
export default WordInputField
