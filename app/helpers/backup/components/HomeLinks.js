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
        <Link to='/library/new'><div className="small-4 large-4 columns homeLink">CREATE</div></Link>
        <Link to='/share'><div className="small-4 large-4 columns homeLink">SHARE</div></Link>
        <Link to='/play'><div className="small-4 large-4 columns homeLink">PLAY</div></Link>
      </div>
    )
  }
}
export default HomeLinks
