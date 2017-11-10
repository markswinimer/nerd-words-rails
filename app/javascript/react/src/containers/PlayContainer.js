import React from 'react'
import { Link } from 'react-router';
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
    this.handleStartGame = this.handleStartGame.bind(this)
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
    fetch('/api/v1/games.json', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)}
    )
    .then(response => response.json())
    .then(body => {
      this.setState({ gameId: body.game.id })
    })
  }

  render() {
    let currentLibrary = [];
    let playContainer;
    if(this.state.gameId) {
      let path = "/gameplay/" + this.state.gameId
      playContainer =
      <div>
      <div className="small-12 large-12 columns">
          <div id="suggestedBox" className="homeHeader">Suggested ways to play</div>
          <hr className="hrLibrary" />
      </div>

      <div className="small-12 large-12 columns instructionsContainer">
        <div className="small-4 large-4 columns box">
          <div className="suggestedBox">
              <div className="large-12 columns resultName">Pictionary</div>
              <div className="large-12 columns instructionsBox">
                <ul>
                  <li className="iMenu">We suggest using your word library in place of physical cards while playing pictionary.</li>
                  <li className="iMenu">Separate into teams or individual players.</li>
                  <li className="iMenu">When it's your turn to draw a word, press the "Show" button and
                    begin drawing. Once your turn is over, if your teammate/other players were able to
                    guess your word, give yourself a point.</li>
                  <li className="iMenu">Let the scoreboard keep track of score for you or keep playing
                   until your game is over.</li>
                </ul>
            </div>
          </div>
        </div>
        <div className="small-4 large-4 columns box">
          <div className="suggestedBox">
              <div className="large-12 columns resultName">Freeform</div>
              <div className="large-12 columns instructionsBox">
                <ul>
                  <li className="iMenu">Nerd Words encourages you to play any way you like!</li>
                  <li className="iMenu">You can use this word randomizer and score tracker for a host
                    of word games.</li>
                  <li className="iMenu">You can even invent new word games to play using your favorite library.</li>
                </ul>
              </div>
        </div>
        </div>

        <div className="small-4 large-4 columns box">
          <Link to={path}>
          <button id="startButton" className="wordButtonView">Start!</button>
          </Link>
        </div>
      </div>
    </div>
    } else if (((this.state.user_info) && (this.state.gameStart == false))) {
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
