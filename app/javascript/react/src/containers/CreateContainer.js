import React from 'react'
import LibraryListContainer from './LibraryListContainer.js'
import LibraryMenuContainer from './LibraryMenuContainer.js'
import LibraryNewContainer from './LibraryNewContainer.js'
import LibraryContentsContainer from './LibraryContentsContainer.js'

class CreateLibraryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word_list: [],
      user_info: null,
      currentLibrary: [],
      menuContent: "myLibrary"
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeCurrentLibrary = this.changeCurrentLibrary.bind(this)
    this.handleMenu = this.handleMenu.bind(this)
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
      this.setState({ menuContent: "viewLibrary" })
    })
  }

  handleMenu(event) {
    this.setState({menuContent: event.target.id})
  }

  handleSubmit(event) {
    this.setState({word_list: ["one"]})
  }

  render() {
    let currentLibrary = [];
    if(this.state.currentLibrary) {
      currentLibrary = this.state.currentLibrary
    }
    let activeContent = null;
    if(this.state.user_info) {
      if(this.state.menuContent === "myLibrary") {
      activeContent = <LibraryListContainer
        handleClick={this.changeCurrentLibrary}
        user_info={this.state.user_info}
        currentLibrary={currentLibrary}
        />
      } else if (this.state.menuContent === "newLibrary") {
        activeContent = <LibraryNewContainer
          handleSubmit={this.handleSubmit}
          handleClick={this.changeCurrentLibrary}
          user_info={this.state.user_info}
          currentLibrary={currentLibrary}
          />
      } else if (this.state.menuContent === "viewLibrary") {
        activeContent = <LibraryContentsContainer
          handleSubmit={this.handleSubmit}
          handleClick={this.changeCurrentLibrary}
          user_info={this.state.user_info}
          currentLibrary={currentLibrary}
          />
      }

    }
    return(
      <div className="small-12 large-12 createLibraryContainer">
        <div className="small-5 large-5 columns leftContainer">
          <LibraryMenuContainer
            handleMenu={this.handleMenu}
            handleClick={this.changeCurrentLibrary}
            currentLibrary={currentLibrary}
            />
        </div>
        <div className="small-7 large-7 columns rightContainer">
            {activeContent}
        </div>
      </div>
    )
  }
}

export default CreateLibraryContainer
