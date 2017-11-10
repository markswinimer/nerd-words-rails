import React from 'react'
import SearchContainer from './SearchContainer.js'
import ResultsContainer from './ResultsContainer.js'

class ShareContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: null
    }
    this.makeSearch = this.makeSearch.bind(this)
    this.handleFavorite = this.handleFavorite.bind(this)
  }

  makeSearch(searchValue) {
    let search = { search: searchValue }
    fetch('/api/v1/searches.json', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(search) }
    )
    .then(response => response.json())
    .then(body => {
      this.setState({ searchResults: body })
    })
  }

  handleFavorite(id) {
    debugger
    fetch('/api/v1/favorites.json', {
      credentials: 'same-origin',
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(id) }
    )
  }

  render() {
    return(
      <div className="small-12 large-12 columns shareContainer">
        <div className="small-1 large-1 columns shareLeft">
        </div>
        <div className="small-10 large-10 columns shareRight">
          <div className="small-12 large-12 columns searchContainer">
            <SearchContainer
              makeSearch={this.makeSearch}
             />
          </div>
          <div className="small-12 large-12 columns searchResultsContainer">
            <ResultsContainer
              searchResults={this.state.searchResults}
              handleFavorite={this.handleFavorite}
            />
          </div>
        </div>
        <div className="small-1 large-1 columns shareLeft">
        </div>
      </div>
    )
  }
}

export default ShareContainer
