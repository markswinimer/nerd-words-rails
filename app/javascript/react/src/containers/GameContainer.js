import React from 'react'
import ScoreContainer from './ScoreContainer.js'
import GameRoundContainer from './GameRoundContainer.js'

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      library: null,
      gameData: null,
      players: null,
      deck: null,
      round: 1,
      currentPlayer: 0,
      currentWord: "",
      wordHistory: []
    }
    this.handleScore = this.handleScore.bind(this)
    this.setCurrentWord = this.setCurrentWord.bind(this)
  }


  getRandom(length) { return Math.floor(Math.random()*(length)); }

  getRandomWord(array, size) {
      var length = array.length;

      for(var i = size; i--;) {
          var index = this.getRandom(length);
          var temp = array[index];
          array[index] = array[i];
          array[i] = temp;
      }

      return array.slice(0, size);
  }


  setCurrentWord() {
    if(this.state.deck == null) {
      this.setState({
        currentWord: "No More Words"
      })
    } else {
      if(this.state.deck.length > 1) {
        let word = this.getRandomWord(this.state.deck, 1)[0]
        let deck = this.state.deck
        let wordIndex = deck.indexOf(word)
        deck.splice(wordIndex, 1)
        this.setState({
          currentWord: word,
          deck: deck
        })
      } else if(this.state.deck.length == 1) {
        this.setState({
          currentWord: this.state.deck[0],
          deck: null
        })
      }
    }
  }


  componentDidMount() {
    if(this.state.gameData == null) {
      let gameId = this.props.params.id
      fetch(`/api/v1/games/${gameId}`, {
        credentials: 'same-origin',
        method: 'GET',
        headers: { 'Content-Type': 'application/json' }
      })
      .then(respone => respone.json())
      .then(body => {
        this.setState({
          user: body.user,
          gameData: body.game,
          library: body.library,
          players: body.players,
          deck: body.deck
        })
      })
    }
  }

  handleScore(event) {
    //give player points for scoring
    let history = this.state.wordHistory
    history.push(this.state.currentWord)
    let score = parseInt(this.state.players[this.state.currentPlayer].score)
    score += parseInt(event)
    let clonePlayers = this.state.players
    let a = clonePlayers[this.state.currentPlayer].score
    clonePlayers[this.state.currentPlayer].score = score
    this.setState({
      players: clonePlayers,
      wordHistory: history
    })

    //set the next current player
    if (this.state.currentPlayer == (this.state.gameData.player_count - 1)) {
      this.setState({ currentPlayer: 0 })
    } else {
      let newPlayer = this.state.currentPlayer
      newPlayer += 1
      this.setState({currentPlayer: newPlayer})
    }
  }

  render() {
    let scoreContainer;
    let gameRoundContainer;
    if(this.state.players) {
      scoreContainer =
        <ScoreContainer
        players={this.state.players}
        deck={this.state.deck}
        wordsPlayed={this.state.deck}
        wordHistory={this.state.wordHistory}
        currentPlayer={this.state.currentPlayer}
        />
      gameRoundContainer =
      <GameRoundContainer
        handleScore={this.handleScore}
        setCurrentWord={this.setCurrentWord}
        currentWord={this.state.currentWord}
        libraryName={this.state.library.name}
        roundNumber={this.state.round}
      />
      }
    return(
      <div className="small-12 large-12 columns gameplayContainer">
          {scoreContainer}
          {gameRoundContainer}
      </div>
    )
  }
}

export default GameContainer
