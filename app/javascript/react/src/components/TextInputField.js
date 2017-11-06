import React from "react"

const TextInputField = props => {

  return(
    <label>{props.id}
    <input
      id={props.id}
      name={props.name}
      type='text'
      value={props.value}
      onChange={props.handleChange}
    />
    </label>
  )
}

export default TextInputField
