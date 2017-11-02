import React from 'react'

const DifficultyRadioField = props => {
  return(
  <label className="difficultyLabel">
    <input
      type="radio"
      className={props.name}
      value={1}
      name={props.name}
      onChange={props.handleChange}
    />
    {" "}1{" "}
    <input
      type="radio"
      className={props.name}
      value={2}
      name={props.name}
      onChange={props.handleChange}
    />
    {" "}2{" "}
    <input
      type="radio"
      className={props.name}
      value={3}
      name={props.name}
      onChange={props.handleChange}
    />
    {" "}3{" "}
  </label>
  )
}
export default DifficultyRadioField
