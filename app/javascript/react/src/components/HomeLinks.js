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
    return(
      <div className="homeLinkContainer">
        <div className="small-4 large-4 columns homeLink">
          <Link to='/library/new'>
          <div className="homeHeader">CREATE</div>
          <hr className="hrLibrary" />
          </Link>
        </div>
        <div className="small-4 large-4 columns homeLink">
          <Link to='/play'>
          <div className="homeHeader">PLAY</div>
          <hr className="hrLibrary" />
          </Link>
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
