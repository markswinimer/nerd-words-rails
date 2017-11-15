import React from 'react'
import { Link } from 'react-router';

class HomeLinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    //bindings
  }

  render() {
    let createButton =
      <a href='/users/sign_in'>
        <div className="homeHeader">CREATE</div>
        <hr className="hrLibrary" />
      </a>

    let playButton =
      <a href='/users/sign_in'>
        <div className="homeHeader">PLAY</div>
        <hr className="hrLibrary" />
      </a>

    if(this.props.user_info.id != false) {
      createButton =
        <Link to='/library/new'>
          <div className="homeHeader">CREATE</div>
          <hr className="hrLibrary" />
        </Link>

      playButton =
        <Link to='/play'>
          <div className="homeHeader">PLAY</div>
          <hr className="hrLibrary" />
        </Link>
    }
    return(
      <div className="homeLinkContainer">
        <div className="small-4 large-4 columns homeLink">
        {createButton}
        </div>
        <div className="small-4 large-4 columns homeLink">
          {playButton}
        </div>
        <div className="small-4 large-4 columns homeLink">
          <Link to='/share'>
          <div className="homeHeader">DISCOVER</div>
          <hr className="hrLibrary" />
          </Link>
        </div>
      </div>
    )
  }
}
export default HomeLinks
