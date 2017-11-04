import React from 'react'
import LibraryListContainer from './LibraryListContainer.js'
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
    this.setState({menuContent: menu})
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
          changeManue={this.changeMenu}
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
        <div className="small-5 large-5 columns leftContainer">
          <div className="small-1 large-6 columns">

          </div>
          <div className="small-11 large-6 columns">
          <LibraryMenuContainer
            handleMenu={this.handleMenu}
            handleClick={this.changeCurrentLibrary}
            currentLibrary={currentLibrary}
            />
          </div>
        </div>
        <div className="small-7 large-7 columns rightContainer">
            {activeContent}
        </div>
      </div>
    )
  }
}

export default CreateContainer
