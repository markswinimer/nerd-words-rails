import React from 'react'

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ""
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleSearch() {
    this.props.makeSearch(this.state.searchValue)
  }

  handleChange(event) {
    this.setState({ searchValue: event.target.value })
  }

  handleFilter(event) {
    this.props.makeSearch(event.target.id)
  }

  render() {
    return(
      <div className="large-12 columns searchBarElement">
        <div>
          <div className="scoreHeader">Search:</div>
          <hr className="hrLibrary" />
          <input name="search" onChange={this.handleChange} className="searchInput" type="text"></input>
          <button name="search" className="searchBarButton">
            <div onClick={this.handleSearch} className="playerScoreName">GO!</div>
          </button>
        </div>
        <div>
          <div id="filterBy" className="filterButton">
            <div className="playerScoreName">Filter</div>
          </div>
          <button id="all" onClick={this.handleFilter} className="filterButton">
            <div id="all" className="playerScoreName">all</div>
          </button>
          <button onClick={this.handleFilter} className="filterButton">
            <div id="top10" className="playerScoreName">top 10</div>
          </button>
          <button id="top5" onClick={this.handleFilter} className="filterButton">
            <div id="top5" className="playerScoreName">top 5</div>
          </button>
        </div>
      </div>
    )
  }
}
export default SearchContainer
