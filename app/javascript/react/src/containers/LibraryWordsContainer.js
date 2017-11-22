import React from 'react'
import ListElement from '../components/ListElement.js'

class LibraryWordsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myWords: ""
    }
  }
  componentDidMount() {
    fetch('/api/v1/words.json', {
    credentials: 'same-origin',
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
  })
  .then(response => response.json())
  .then(body => {
    this.setState({ myWords: Object.entries(body.words) })
  })
}

  render() {
    let myWords = [];
    if(this.state.myWords) {
    myWords = this.state.myWords.map(word => {
      return(
        <ListElement
          key={word[1].id}
          id={word[1].id}
          name={word[1].name}
        />
      )
    })
  }

  return(
    <div>
      <div className="small-12 large-12 columns libraryTopRight">
      </div>
      <div className="small-12 large-12 columns libraryWords">
        <div className="listHeader">Every Word I've Created!</div>
        <hr className="hrLibrary" />
        <div className="myLibraries">
          {myWords}
        </div>
      </div>
    </div>
    )
  }
  }

  export default LibraryWordsContainer
