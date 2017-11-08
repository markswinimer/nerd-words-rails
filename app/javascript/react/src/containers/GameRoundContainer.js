import React from 'react'

class GameRoundContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roundStart: false,
      roundNumber: 0
    }
    this.handleViewWord = this.handleViewWord.bind(this)
    this.handleScore = this.handleScore.bind(this)
  }

  handleViewWord() {
    this.setState({roundStart: true})
    this.props.setCurrentWord()
  }

  handleScore(event) {
    this.props.handleScore(event.target.id)
    let round = this.state.roundNumber
    round += 1
    this.setState({
      roundStart: false,
      roundNumber: round
     })
  }
  
  componentDidMount() {
    if (this.state.roundNumber === 0 ) {
    this.setState({roundNumber: this.props.roundNumber})
    }
  }

  render() {
    let button;
    let currentWord = "-----"
    if (this.state.roundStart === false) {
      button = <button onClick={this.handleViewWord} id="" className="wordButtonView">SHOW</button>
    } else {
      currentWord = this.props.currentWord
      button =
      <div>
        <button onClick={this.handleScore} id="1" className="wordButtonL">YES</button>
        <button onClick={this.handleScore} id="0" className="wordButtonR">NO</button>
      </div>
    }

    return(
      <div className="small-10 large-10 columns gameRoundContainer">
        <div className="roundTitleCountainer">
        <div className="roundTitle">Round {this.state.roundNumber}</div>
        <div className="roundTitle right">{this.props.libraryName}</div>
        <div></div>
        </div>
        <hr className="hrRound"/>
        <div className="small-12 large-12 columns wordRow">
                {currentWord}
        </div>
        <div className="small-4 large-4 columns wordShow">
          {button}
        </div>
        <div className="small-4 large-4 columns">
        </div>
      </div>
    )
  }
}

export default GameRoundContainer
