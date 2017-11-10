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
    let searchResults;
    if(this.props.searchResults) {
      let i = 0
      let leftResult;
      searchResults = this.props.searchResults["result"].map(result => {
        if(i === 0) {
          leftResult = result
          i = 1
        } else if(i === 1) {
          i = 0
          return(
            <div className="small-12 large-12 columns resultRow">
              <ResultTile
                key={result.name}
                result={result}
              />
              <ResultTile
                key={leftResult.name}
                result={leftResult}
              />
            </div>
          )
        }
      })
    }

    return(
      <div className="small-12 large-12 columns">
        {searchResults}
      </div>
    )
  }
}
export default ResultsContainer
