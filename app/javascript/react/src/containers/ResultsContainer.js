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
      let i = 1
      let leftResult;
      searchResults = this.props.searchResults["result"].map(result => {
        if( (i % 2) === 1 ) {
          leftResult = result
          i += 1
        } else if( (i % 2) === 0 ) {
          i += 1
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
