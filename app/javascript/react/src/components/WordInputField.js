import React from 'react'

const WordInputField = props => {
  return(
    <label>
      <input
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.handleDetails}
        type='text'
        id={props.id}
        value={props.value}
        style={{margin: 0}}
      />
    </label>
  )
}

export default WordInputField
