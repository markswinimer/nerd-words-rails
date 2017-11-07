import React from 'react'
import ScoreContainer from './ScoreContainer.js'

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameData: null
    }
    //binding
  }

  componentDidMount() {
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
        deck: body.library.words,
      })
    })
  }
  render() {
    let scoreContainer;
    if(this.state.players) {
      scoreContainer =
        <ScoreContainer
        players={this.state.players}
        />
      }
    return(
      <div className="small-12 large-12 columns gameplayContainer">
          {scoreContainer}

        GAMEPLAY PAGE
      </div>
    )
  }
}

export default GameContainer
