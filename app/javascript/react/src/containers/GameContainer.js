import React from 'react'

class GameContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameDate: null
    }
    //binding
  }

  render() {
    return(
      <div>
        GAMEPLAY PAGE
      </div>
    )
  }
}

export default GameContainer
