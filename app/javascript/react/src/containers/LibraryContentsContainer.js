import React from 'react'
import ListElement from '../components/ListElement.js'

class LibraryContentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let currentLibrary = [];
    if(this.props.currentLibrary.wordList) {
     currentLibrary = this.props.currentLibrary.wordList.map(word => {
      return(
        <ListElement
          key={word.id}
          id={word.id}
          name={word.name}
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
          {currentLibrary}
        </div>
      </div>
    </div>
    )
  }
}

export default LibraryContentsContainer
