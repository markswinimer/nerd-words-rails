import React from 'react'
import LibraryListContainer from './LibraryListContainer.js'
import ListElement from '../components/ListElement.js'
import PlayerSelectComponent from '../components/PlayerSelectComponent.js'

class PlayMenuContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      libraryOption: "",
      libraryList: "",
      selectedLibraryId: null,
      playerCount: null,
      gameMode: null
    }
    this.handleSelect = this.handleSelect.bind(this)
    this.handlePlayStart = this.handlePlayStart.bind(this)
    this.handleSelectPlayers = this.handleSelectPlayers.bind(this)
    this.handleLibraryOption = this.handleLibraryOption.bind(this)
    this.handleSelectLibrary = this.handleSelectLibrary.bind(this)
  }




  handleLibraryOption(event) {
    if(event.target.id === "myLibraries") {
      if(this.props.user_info.libraries.length > 0) {
        this.setState({
          libraryOption: event.target.id,
          libraryList: this.props.user_info.libraries
        })
      } else {
        this.setState({
          libraryOption: "noLibraries"
        })
      }
    } else if(event.target.id === "favorites") {
      if(this.props.user_info.favorites.length > 0) {
        this.setState({
          libraryOption: event.target.id,
          libraryList: this.props.user_info.favorites
        })
      } else {
        this.setState({
          libraryOption: "noFavorites"
        })
      }
    } else if(event.target.id === "random"){
      this.setState({libraryOption: event.target.id})
      fetch('/api/v1/libraries_selector', {
        credentials: 'same-origin',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      })
      .then(response => response.json())
      .then(data => {
        this.setState({ currentLibrary: data })
      })
    }
  }
  handleSelectLibrary(libraryId) {
    this.setState({selectedLibraryId: libraryId})
  }
  handleSelect(event) {
    this.setState({ gameMode: event.target.id })
  }
  handleSelectPlayers(event) {
    this.setState({ playerCount: event.target.id })
  }
  handlePlayStart() {
    let gameData = {}
    gameData["libraryId"] = this.state.selectedLibraryId
    gameData["playerCount"] = this.state.playerCount
    gameData["gameMode"] = this.state.gameMode
    this.props.handlePlayStart(gameData)
  }

  render() {
    console.log(this.state.selectedLibraryId)
    let myLibraries;
    let myFavorites;
    let randomLibrary;
    let librarySelected;

    let myLibrariesButton = "playButton"
    let favoriteButton = "playButton"
    let randomButton = "playButton"
    let playClassic = "playButton"
    let playTaboo = "playButton"
    let playCustom = "playButton"

    if(this.state.gameMode == "playClassic") {
      playClassic = "selected"
    } else if (this.state.gameMode == "playTaboo") {
      playTaboo = "selected"
    } else if (this.state.gameMode == "playCustom") {
      playCustom = "selected"
    }

    if(this.state.libraryOption === "myLibraries") {
      myLibrariesButton = "selected"
      myLibraries = this.props.user_info.libraries.map(library => {
      if(this.state.selectedLibraryId === library.id) {
        librarySelected = "librarySelected"
      } else {
        librarySelected = "playList"
      }
      return(
        <div>
        <ListElement
          handleClick={this.handleSelectLibrary}
          key={library.id}
          id={library.id}
          name={library.name}
          className={librarySelected}
        />
        <hr/>
      </div>
      )
    })
    myLibraries = <div className="selectedLibraries">{myLibraries}</div>

  } else if (this.state.libraryOption === "noLibraries") {
    myLibrariesButton = "selected"
    myLibraries =<div className="selectedLibraries"><h6>Oops. You don't have any libraries yet...</h6></div>

  } else if (this.state.libraryOption === "noFavorites") {
    favoriteButton = "selected"
    myFavorites = <div className="selectedLibraries"><h6>Oops. You havn't favorited anything yet...</h6></div>

  } else if (this.state.libraryOption === "favorites") {
    favoriteButton = "selected"

  } else if (this.state.libraryOption === "random") {
    randomButton = "selected"

  }

    return(
      <div>
        <div className="small-12 large-12 columns playMenuContainer">
          <div className="small-4 large-4 columns playMenu">
            <div className="small-12 large-12 libraryTopLeft"></div>
            <div className="menuHeader">MODE</div>
            <hr className="hrMenu"/>
            <div className="block-display">
              <button onClick={this.handleSelect} id="playClassic" className={playClassic}>Classic</button>
              {/* Disabled Temporarily */}
              {/* <button onClick={this.handleSelect} id="playCustom" className={playCustom}>Simply Random</button> */}
            </div>
          </div>

          <PlayerSelectComponent
            handleSelect={this.handleSelectPlayers}
            className="playButton"
            playerCount={this.state.playerCount}
          />

          <div className="small-4 large-4 columns playMenu">
            <div className="small-12 large-12 libraryTopLeft"></div>
            <div className="menuHeader">LIBRARY</div>
            <hr className="hrMenu"/>
            <div className="play-block-display">
              <button onClick={this.handleLibraryOption} id="myLibraries" className={myLibrariesButton}>My Libraries</button>
              {myLibraries}
              <button onClick={this.handleLibraryOption} id="favorites" className={favoriteButton}>Favorites</button>
              {myFavorites}
              {/* Disabled Temporarily */}
              {/* <button onClick={this.handleLibraryOption} id="random" className={randomButton}>Random!</button> */}
              {randomLibrary}
            </div>
          </div>
        </div>
        <div className="small-12 large-12 columns playStartContainer">
          <button onClick={this.handlePlayStart} id="playStart" className="playStartButton">Word Up!</button>
        </div>
      </div>
    )
  }
}

export default PlayMenuContainer
