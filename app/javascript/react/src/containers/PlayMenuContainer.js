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
      selectedLibrary: "",
      gameMode: null
    }
    this.handleSelect = this.handleSelect.bind(this)
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
        debugger
        this.setState({
          libraryOption: event.target.id,
          libraryList: this.props.user_info.favorites
        })
      } else {
        debugger
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
  handleSelectLibrary(event) {
    this.setState({selectedLibrary: ""})
  }
  handleSelect(event) {
    this.setState({ gameMode: event.target.id })
  }
  handleSelectPlayers(event) {
    this.setState({ playerCount: event.target.id })
  }

  render() {
    let myLibraries;
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
    myLibraries = this.props.user_info.libraries.map(library => {
      return(
        <div>
        <ListElement
          handleClick={this.props.handleClick}
          key={library.id}
          id={library.id}
          name={library.name}
          className="playList"
          description={library.description}
        />
        <br/>
      </div>
      )
    })
  } else if (this.state.libraryOption === "noLibraries") {
    myLibraries = <h6>Oops. You don't have any libraries yet...</h6>
  } else if (this.state.libraryOption === "noFavorites") {
    myLibraries = <h6>Oops. You havn't favorited anything yet...</h6>
  }
    return(
    <div className="playMenuContainer">
    <div className="small-4 large-4 columns playMenu">
      <div className="small-12 large-12 libraryTopLeft"></div>
        <div className="menuHeader">MODE</div>
        <hr className="hrMenu"/>
        <div className="block-display">
          <button onClick={this.handleSelect} id="playClassic" className={playClassic}>Classic</button>
          <button onClick={this.handleSelect} id="playTaboo" className={playTaboo}>Taboo</button>
          <button onClick={this.handleSelect} id="playCustom" className={playCustom}>Custom</button>
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
        {myLibraries}
        <div className="play-block-display">
          <button onClick={this.handleLibraryOption} id="myLibraries" className="playButton">My Libraries</button>
          <button onClick={this.handleLibraryOption} id="favorites" className="playButton">Favorites</button>
          <button onClick={this.handleLibraryOption} id="random" className="playButton">Random!</button>
        </div>
    </div>
  </div>
    )
  }
}

export default PlayMenuContainer
