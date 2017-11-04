import React from 'react'

const TextAreaField = props => {

  return(
    <label>
    <textarea
      id={props.name}
      name={props.name}
      type='text'
      value={props.value}
      onChange={props.handleDetails}
    />
    </label>
  )
}

export default TextAreaField
