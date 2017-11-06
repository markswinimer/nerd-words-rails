import React from 'react'

const PlaySelectComponent = props => {
  let buttons;
  let players = [1,2,3,4,5,6]
  let id;
  let className;
  buttons = players.map(num => {
    className = props.className
    id = num + "player"
    if(id == props.playerCount) {
      className = "selected"
    }
    return(
      <button onClick={props.handleSelect} id={id} className={className}>{num}</button>
    )
  })
  return(
    <div className="small-4 large-4 columns playMenu">
      <div className="small-12 large-12 libraryTopLeft"></div>
        <div className="menuHeader">PLAYERS</div>
        <hr className="hrMenu"/>
        <div className="block-display">
        {buttons}
        </div>
    </div>
  )
}

export default PlaySelectComponent
