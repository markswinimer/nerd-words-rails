import React from 'react'
import HomeLinks from '../components/HomeLinks.js'
import { Link } from 'react-router'

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: null
    }
    //bindings
  }

  // componentDidMount() {
  //   fetch('/api/v1/users.json', {
  //     credentials: 'same-origin',
  //     method: 'GET',
  //     headers: { 'Content-Type': 'application/json' }
  //   })
  //   .then(response => response.json())
  //   .then(data => {
  //     this.setState({ current_user: data.user });
  //   })
  // }

  render() {
    return(
      <div>
        <div className="whiteTop"></div>
          <div className="small-12 large-12 welcome">
            <div className="title">NERD WORDS</div>
          </div>
          <div className="whiteSlab">
          </div>
          <HomeLinks
          />
          <div className="whiteBottom"></div>
          <div className="bottomBorder"></div>
        </div>
    )
  }
}

export default MainContainer
