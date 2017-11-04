import React from 'react'
import ListElement from '../components/ListElement.js'

class LibraryContentsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleDelete = this.handleDelete.bind(this)
  }

  handleDelete() {
    fetch(`/api/v1/libraries/${this.props.currentLibrary.library.library_id}`, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(
      this.props.changeMenu("myLibrary")
    )
  }


  render() {
    let currentLibrary = [];
    if(this.props.currentLibrary) {
     currentLibrary = this.props.currentLibrary.library.words.map(word => {
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
        <div className="listHeader">{this.props.currentLibrary.library.name}</div>
        <hr className="hrLibrary" />
        <div className="small-6 large-6 columns myLibraries">
            {currentLibrary}
        </div>
          <div className="small-6 large-6 columns rightLibraryForm">
            <div className="newFormButtons">
              <button id="editLibrary" className="submitButton" onClick={this.props.handleMenu}>Edit</button>
              <button className="submitButton" onClick={this.handleDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default LibraryContentsContainer
