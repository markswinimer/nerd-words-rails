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
        <Link to='/'><div className="small-4 large-4 columns homeLink"></div></Link>
        <Link to='/'><div className="small-4 large-4 columns homeLink"></div></Link>
        <Link to='/'><div className="small-4 large-4 columns homeLink"></div></Link>
      </div>
    )
  }
}
export default HomeLinks
