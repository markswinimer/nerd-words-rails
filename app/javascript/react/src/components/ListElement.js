import React from 'react'

const ListElement = props => {
  let handleClick = () => {
    props.handleClick(props.id)
  }
  return(
    <div onClick={handleClick}>{props.name}
      <hr />
    </div>
  )
}
export default ListElement
