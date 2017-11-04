import React from 'react'
import LibraryFormContainer from './LibraryFormContainer.js'
import LibraryMenuContainer from './LibraryMenuContainer.js'

class CreateLibraryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word_list: [],
      user_info: null,
      currentLibrary: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeCurrentLibrary = this.changeCurrentLibrary.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/users.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ user_info: data })
    })
  }

  changeCurrentLibrary(libraryId) {
    let word = `/api/v1/libraries/:${libraryId}`
    fetch(`/api/v1/libraries/${libraryId}`)
    .then(response => response.json())
    .then(body => {
      this.setState({ currentLibrary: body })
    })
    }

  handleSubmit(event) {
    this.setState({word_list: ["one"]})
  }

  render() {
    let currentLibrary = [];
    if(this.state.currentLibrary) {
      currentLibrary = this.state.currentLibrary
    }
    let libraryFormContainer = null;
    let libraryMenuContainer = null;
    if(this.state.user_info) {
      libraryFormContainer =  <LibraryFormContainer
        handleClick={this.changeCurrentLibrary}
        current_user={this.state.current_user}
      />
      libraryMenuContainer = <LibraryMenuContainer
        handleClick={this.changeCurrentLibrary}
        user_info={this.state.user_info}
        currentLibrary={currentLibrary}
        />
    }
    return(
      <div className="small-12 large-12 createLibraryContainer">
        <div className="small-5 large-5 columns leftContainer">
          {libraryFormContainer}
        </div>
        <div className="small-7 large-7 columns rightContainer">
          {libraryMenuContainer}
        </div>
      </div>
    )
  }
}

export default CreateLibraryContainer
