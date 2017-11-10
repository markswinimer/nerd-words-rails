import React from 'react'
import ResultTile from '../components/ResultTile.js'

class ResultsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    this.handleFavorite = this.handleFavorite.bind(this)
  }

  handleFavorite(event) {
    let id = event.target.name
    this.props.handleFavorite(id)
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
                handleFavorite={this.handleFavorite}
              />
              <ResultTile
                key={leftResult.name}
                result={leftResult}
                handleFavorite={this.handleFavorite}
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
