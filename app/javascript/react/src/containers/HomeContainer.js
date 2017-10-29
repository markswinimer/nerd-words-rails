import React from 'react'
import HomeLinks from '../components/HomeLinks.js'

class HomeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
    //bindings
  }
  render() {
    return(
      <div>
          <div className="small-12 large-12 welcome">
            <div className="title">Nerd Words</div>
          </div>
          <HomeLinks />
        </div>
    )
  }
}

export default HomeContainer
