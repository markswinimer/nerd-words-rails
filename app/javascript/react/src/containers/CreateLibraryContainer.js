import React from 'react'
import LibraryFormContainer from './LibraryFormContainer.js'
import LibraryMenuContainer from './LibraryMenuContainer.js'

class CreateLibraryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word_list: [],
      user_info: null,
      currentLibrary: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch('/api/v1/users.json', {
      credentials: 'same-origin',
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(response => response.json())
    .then(data => {
      this.setState({ user_info: data })
    })
  }

  changeCurrentLibrary() {
    fetch('/api/v1/libraries', {
      method: "POST",
      body: JSON.stringify(this.state.user_info.user)
    })
  }

  handleSubmit(event) {
    this.setState({word_list: ["one"]})
  }

  render() {
    let libraryFormContainer = null;
    let libraryMenuContainer = null;
    if(this.state.user_info) {
      libraryFormContainer =  <LibraryFormContainer
        current_user={this.state.current_user}
      />
      libraryMenuContainer = <LibraryMenuContainer
        user_info={this.state.user_info}
        />
    }
    return(
      <div className="small-12 large-12 createLibraryContainer">
        <div className="small-5 large-5 columns leftContainer">
          {libraryFormContainer}
        </div>
        <div className="small-7 large-7 columns rightContainer">
          {libraryMenuContainer}
        </div>
      </div>
    )
  }
}

export default CreateLibraryContainer
