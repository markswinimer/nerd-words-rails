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
      let num = 0
      let leftResult;
      let arrayLength = this.props.searchResults["result"].length
      searchResults = this.props.searchResults["result"].map(result => {
        num += 1
        if(num == arrayLength) {
          return(
            <div className="small-12 large-12 columns resultRow">
              <ResultTile
                key={result.name}
                result={result}
                handleFavorite={this.handleFavorite}
              />
            </div>
          )
        } else if (i === 0) {
          leftResult = result
          i = 1
        } else {
          i = 0
          return(
            <div className="small-12 large-12 columns resultRow">
              <ResultTile
                key={leftResult.name}
                result={leftResult}
                handleFavorite={this.handleFavorite}
              />
              <ResultTile
                key={result.name}
                result={result}
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
