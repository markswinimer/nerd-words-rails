import React from 'react'
import ListElement from '../components/ListElement.js'

class ScoreContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let remaining;
    if(this.props.deck != null) {
      remaining = this.props.deck.length
    }

    let playerNames;
    playerNames = this.props.players.map( player => {
      let className = "playerScore"
      if(this.props.currentPlayer == player.player_num) {
        className = "playerScoreSelected"
      }
      return(
        <div className={className}>
          <div className="playerScoreName">{player.name}</div>
          <div className="pScore">{player.score}</div>
        </div>
      )
    })

    let wordsPlayed;
    if(this.props.wordHistory) {
      wordsPlayed = this.props.wordHistory.map(word => {
        return(
          <ListElement
          name={word}
          className="historyWord"
        />)
      })
    }

    return(
      <div className="small-2 large-2 columns scoreColumn">
        <div className="scoreHeader">SCORE</div>
        <hr className="hrLibrary" />
        {playerNames}
        <div className="gameDeck">
          <div className="scoreHeader">DECK</div>
          <hr className="hrLibrary" />
          <div className="deckMenu">
            <div className="playerScore">
              <div className="playerScoreName">Remaining</div>
              <div className="pScore">{remaining}</div>
            </div>
            <div className="playerScoreSelected">
            <div className="playerScoreName">History</div>
            </div>
            <div className="wordsHistoryContainer">
              {wordsPlayed}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ScoreContainer
