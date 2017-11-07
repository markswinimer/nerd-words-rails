import React from 'react'
import TextInputField from '../components/TextInputField.js'

class PlayerNamesContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handlePlayerState = this.handlePlayerState.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    let newGamePayload = {}
    newGamePayload["gameData"] = this.props.gameData
    newGamePayload["user"] = this.props.user_info.user
    newGamePayload["players"] = this.state.playerCount
    this.props.handleSubmit(newGamePayload)
  }
  handleChange(event) {
    let newPlayerCount = this.state.playerCount
    newPlayerCount[event.target.name] = event.target.value
    this.setState({ newPlayerCount })
  }
  handleState(num) {
    this.setState({ num })
  }
  handlePlayerState(playerCount) {
    this.setState({ playerCount })
  }

  componentDidMount() {
    if(this.state.playerCount == null) {
      let i = 1;
      let playerCount = {}
      while(i <= this.props.gameData.playerCount) {
        let name = "player" + i
        playerCount[name] = ""
        i += 1
      }
    this.setState({ playerCount })
    }
  }


  render() {
    let namesForm;
    if(this.state.playerCount) {
      namesForm = Object.keys(this.state.playerCount).map(player => {
        let name = player
        return(
          <TextInputField
            key={player}
            id={player}
            placeholder={name}
            name={name}
            value={this.state.name}
            handleChange={this.handleChange}
          />
        )
      })
    }
    return(
      <div className="small-12 large-12 columns playerContainer">
        <div className="small-4 large-4 columns"></div>
        <div className="small-4 large-4 columns playerCountMenu">
          <div className="small-12 large-12 libraryTopLeft"></div>
          <div className="menuHeader">Player Names</div>
          <hr className="hrMenu"/>
          <form onSubmit={this.handleSubmit}>
            {namesForm}
            {/* <Link to='/gameplay'> */}
          <button className="playStartButton" type="submit">OK!</button>
            {/* </Link> */}
          </form>
      </div>
      <div className="small-4 large-4 columns"></div>
    </div>
    )
  }
}

export default PlayerNamesContainer
