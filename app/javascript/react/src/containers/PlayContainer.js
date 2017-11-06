import React from 'react'
import LibraryListContainer from './LibraryListContainer.js'
import LibraryMenuContainer from './LibraryMenuContainer.js'
import LibraryNewContainer from './LibraryNewContainer.js'
import LibraryContentsContainer from './LibraryContentsContainer.js'
import LibraryWordsContainer from './LibraryWordsContainer.js'
import PlayMenuContainer from './PlayMenuContainer.js'
import PlayerSelectComponent from '../components/PlayerSelectComponent.js'
import GameContainer from './GameContainer'
import PlayerNamesContainer from './PlayerNamesContainer'

class PlayContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word_list: [],
      currentLibrary: null,
      menuContent: "myLibrary",
      user_info: null,
      user_libraries: null,
      gameStart: false,
      gameData: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.changeCurrentLibrary = this.changeCurrentLibrary.bind(this)
    this.handleMenu = this.handleMenu.bind(this)
    this.changeMenu = this.changeMenu.bind(this)
    this.handlePlayStart = this.handlePlayStart.bind(this)
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
  handlePlayStart(event) {
    this.setState({
      gameStart: true,
      gameData: event
    })
  }
  handleStartGame(payload) {
    debugger;
  }

  render() {
    let currentLibrary = [];
    let playContainer;
    if((this.state.user_info) && (this.state.gameStart == false)) {
      playContainer = <PlayMenuContainer
        handleMenu={this.handleMenu}
        user_info={this.state.user_info}
        currentLibrary={this.state.currentLibrary}
        handlePlayStart={this.handlePlayStart}
      />
    } else if (((this.state.user_info) && (this.state.gameStart == true))) {
      playContainer = <PlayerNamesContainer
        user_info={this.state.user_info}
        gameData={this.state.gameData}
        handleSubmit={this.handleStartGame}
      />
    }
    return(
        <div className="small-12 large-12 playContainer">
          {playContainer}
        </div>
    )
  }
  }

export default PlayContainer
