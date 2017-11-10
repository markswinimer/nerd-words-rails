import React from 'react'
import ListElement from '../components/ListElement.js'

class LibraryFavoriteListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let myLibraries = "Looks like you don't have any favorites yet!";
    if(this.props.user_libraries.favorites) {
      debugger
    myLibraries = this.props.user_libraries.favorites.map(library => {
      return(
        <ListElement
          handleClick={this.props.handleClick}
          key={library.id}
          id={library.id}
          className="libraryList"
          name={library.name}
          description={library.description}
        />
      )
    })
  }



  return(
    <div>
      <div className="small-12 large-12 columns libraryTopRight">
      </div>
      <div className="small-12 large-12 columns libraryWords">
        <div className="listHeader">My Libraries</div>
        <hr className="hrLibrary" />
        <div className="myLibraries">
          {myLibraries}
        </div>
      </div>
    </div>
    )
  }
}

export default LibraryFavoriteListContainer
