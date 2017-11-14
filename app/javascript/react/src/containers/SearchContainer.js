import React from 'react'

class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      error: ""
    }
    this.handleSearch = this.handleSearch.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleSearch() {
    if(this.state.searchValue == "") {
      this.setState({error: "Input cannot be blank!"})
    } else {
      this.props.makeSearch(this.state.searchValue)
    }
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
          <button name="search" className="searchBarButton">
            <div onClick={this.handleSearch} className="search">Search</div>
          </button>
          <input name="search" onChange={this.handleChange} className="searchInput" type="text"></input>
          <div className="errorMessage">{this.state.error}</div>
        </div>
        <div>
          <button id="all" onClick={this.handleFilter} className="filterButton">
            <div id="all" className="playerScoreName">all</div>
          </button>
          <button onClick={this.handleFilter} className="filterButton">
            <div id="top10PlayCount" className="playerScoreName">top <i id="faViews" className="fa fa-gamepad" aria-hidden="true"></i></div>
          </button>
          <button id="top10Favorite" onClick={this.handleFilter} className="filterButton">
            <div id="top10Favorite" className="playerScoreName">top <i  id="faViews" className="fa fa-star" aria-hidden="true"></i></div>
          </button>
        </div>
      </div>
    )
  }
}
export default SearchContainer
