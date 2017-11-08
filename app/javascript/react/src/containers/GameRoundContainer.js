import React from 'react'

class GameRoundContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStart: false
    }
  }


  componentDidMount() {
    if(this.state.gameStart === false) {
      this.props.setCurrentWord()
      this.setState({gameStart: true})
    }
  }

  render() {
    return(
      <div className="small-10 large-10 columns gameRoundContainer">
        <div className="roundTitle">Round 1</div>
        <hr className="hrRound"/>
        <div className="small-12 large-12 columns wordRow">
                {this.props.currentWord}
        </div>
        <div className="small-4 large-4 columns wordShow">
          <button onClick={this.props.handleScore} id="1" className="wordButtonL">YES</button>
          <button onClick={this.props.handleScore} id="0" className="wordButtonR">NO</button>
        </div>
        <div className="small-4 large-4 columns">
        </div>
      </div>
    )
  }
}

export default GameRoundContainer
