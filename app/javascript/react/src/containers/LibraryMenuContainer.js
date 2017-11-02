import React from 'react'
import ListElement from '../components/ListElement.js'

class LibraryMenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    let myLibraries = this.props.user_info.libraries.map(library => {
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
    let wordList;
    if(this.props.currentLibrary.wordList) {
     wordList = this.props.currentLibrary.wordList.map(word => {
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
        <div className="small-4 large-4 columns libraryMenu">
          <button className="createButton" onClick={this.handleSubmit}>CREATECREATE</button>
          <button className="createButton" onClick={this.handleSubmit}>CREATECREATE</button>
          <button className="createButton" onClick={this.handleSubmit}>CREATECREATE</button>
          <button className="createButton" onClick={this.handleSubmit}>CREATECREATE</button>
        </div>
        <div className="small-8 large-8 columns libraryList">
          <h3>My Libraries</h3>
          <div className="listContainer">
            <ul>
              <hr />
              {myLibraries}
            </ul>
          </div>
        </div>
      </div>
      <div className="small-12 large-12 columns libraryWords">
        <div className="small-8 large-8 columns libraryWordsLeft">
          <h3>Current Library</h3>
          <div className="currentLibraryList">
            {wordList}
          </div>
        </div>
        <div className="small-4 large-4 columns libraryWordsRight">
          <div>
          </div>
        </div>
      </div>
    </div>
    )
  }
}

export default LibraryMenuContainer
