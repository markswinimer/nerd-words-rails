import React from 'react'

const LibraryMenuContainer = props => {

    return(
      <div className="small-12 large-12 libraryContainer">
        <div className="small-12 large-12 libraryTopLeft">
        </div>
        <div className="small-12 large-12 libraryControlMenu">
          <div className="menuHeader">Menu</div>
          <hr className="hrMenu"/>
          <div className="block-display">
            <button onClick={props.handleMenu} id="myLibrary" className="libButton">Libraries</button>
            <button onClick={props.handleMenu} id="myLibrary" className="libButton">Favorites</button>
            <button onClick={props.handleMenu} id="viewAllWords" className="libButton">Words</button>
            <button onClick={props.handleMenu} id="newLibrary" className="libButton">New</button>
          </div>
        </div>
      </div>
    )
}
export default LibraryMenuContainer
