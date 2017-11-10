import React from 'react'
import LibraryListContainer from './LibraryListContainer.js'
import LibraryFavoriteListContainer from './LibraryFavoriteListContainer.js'
import LibraryMenuContainer from './LibraryMenuContainer.js'
import LibraryNewContainer from './LibraryNewContainer.js'
import LibraryContentsContainer from './LibraryContentsContainer.js'
import LibraryWordsContainer from './LibraryWordsContainer.js'

class CreateContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word_list: [],
      currentLibrary: null,
      menuContent: "myLibrary",
      user_info: null,
      user_libraries: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeCurrentLibrary = this.changeCurrentLibrary.bind(this)
    this.handleMenu = this.handleMenu.bind(this)
    this.changeMenu = this.changeMenu.bind(this)
    this.handleDelete = this.handleDelete.bind(this)
    this.getUserLibraries = this.getUserLibraries.bind(this)
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
    fetch('/api/v1/libraries.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ user_libraries: data })
    })
  }

  changeCurrentLibrary(libraryId) {
    fetch(`/api/v1/libraries/${libraryId}`, {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(respone => respone.json())
    .then(body => {
      this.setState({
      currentLibrary: body,
      menuContent: "viewLibrary"
      })
    })
  }


  handleMenu(event) {
    this.setState({menuContent: event.target.id})
  }
  changeMenu(menu) {
    this.getUserLibraries()
    this.setState({menuContent: menu})
  }

  handleSubmit(formPayload) {
    fetch('/api/v1/words.json', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formPayload)}
    )
    .then(response => response.json())
    .then(body => {
      this.setState({
      currentLibrary: body,
      menuContent: "viewLibrary"
      })
    }
    )
  }

  getUserLibraries() {
    fetch('/api/v1/libraries.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ user_libraries: data })
    })
  }

  handleDelete(library) {
    fetch(`/api/v1/libraries/${library}`, {
      credentials: 'same-origin',
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    this.changeMenu("myLibrary")
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
        user_libraries={this.state.user_libraries}
        currentLibrary={currentLibrary}
        />
      } else if (this.state.menuContent === "myFavorites") {
        activeContent = <LibraryFavoriteListContainer
          handleClick={this.changeCurrentLibrary}
          user_info={this.state.user_info}
          user_libraries={this.state.user_libraries}
          currentLibrary={currentLibrary}
          />
      } else if ((this.state.menuContent === "newLibrary") || (this.state.menuContent === "editLibrary")) {
        activeContent = <LibraryNewContainer
          handleSubmit={this.handleSubmit}
          handleClick={this.changeCurrentLibrary}
          user_info={this.state.user_info}
          currentLibrary={currentLibrary}
          menuContent={this.state.menuContent}
          />
      } else if (this.state.menuContent === "viewLibrary") {
        activeContent = <LibraryContentsContainer
          handleSubmit={this.handleSubmit}
          handleMenu={this.handleMenu}
          handleDelete={this.handleDelete}
          handleClick={this.changeCurrentLibrary}
          user_info={this.state.user_info}
          currentLibrary={currentLibrary}
          />
      } else if (this.state.menuContent === "viewAllWords") {
        activeContent = <LibraryWordsContainer
          handleClick={this.changeCurrentLibrary}
          user_info={this.state.user_info}
          user_libraries={this.state.user_libraries}
          />
      }
    }
    return(
      <div className="small-12 large-12 createLibraryContainer">
        <div className="small-3 large-3 columns leftContainer">
          <div className="small-1 large-1 columns">

          </div>
          <div className="small-11 large-11 columns">
          <LibraryMenuContainer
            handleMenu={this.handleMenu}
            handleClick={this.changeCurrentLibrary}
            currentLibrary={currentLibrary}
            />
          </div>
        </div>
        <div className="small-9 large-9 columns rightContainer">
            {activeContent}
        </div>
      </div>
    )
  }
}

export default CreateContainer
