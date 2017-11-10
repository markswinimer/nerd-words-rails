import React from 'react'
import ResultTile from '../components/ResultTile.js'

class ResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    //bind
  }

  render() {
    let results;
    if(this.props.results) {
      results = this.props.results.map(result => {
        return(
          <div>
          </div>
        )
      })
    }

    return(
      <div className="small-12 large-12 columns">
        <div className="small-12 large-12 columns resultRow">
          <hr/>
          <ResultTile/>
          <ResultTile/>
        </div>
        <div className="small-12 large-12 columns resultRow">
          <hr/>
          <ResultTile/>
          <ResultTile/>
        </div>
      </div>
    )
  }
}
export default ResultsContainer
