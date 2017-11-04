import React from 'react'

const ListElement = props => {
  let handleClick = () => {
    props.handleClick(props.id)
  }
  return(
    <div className="libraryList" onClick={handleClick}>{props.name}
    </div>
  )
}
export default ListElement
