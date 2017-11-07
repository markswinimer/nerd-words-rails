import React from 'react'

class ScoreContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    //binding
  }

  render() {

    let playerNames;
    debugger

    return(
      <div className="small-3 large-3 columns scoreColumn">
        <div className="homeHeader">SCORE</div>
        <hr className="hrLibrary" />
        <h3>Player1</h3>
      </div>
    )
  }
}

export default ScoreContainer
