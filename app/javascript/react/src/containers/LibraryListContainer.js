import React from 'react'
import ListElement from '../components/ListElement.js'

class LibraryListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let myLibraries = "Looks like you don't have any libraries yet!";
    if(this.props.user_libraries) {
    myLibraries = this.props.user_libraries.libraries.map(library => {
      return(
        <ListElement
          handleClick={this.props.handleClick}
          key={library.id}
          id={library.id}
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

export default LibraryListContainer
