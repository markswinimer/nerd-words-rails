import React from 'react'
import ListContainer from './ListContainer.js'

class CreateLibraryContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      word_list: []
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    this.setState({word_list: ["one"]})
  }

  render() {
    console.log(this.state)
    return(
      <div className="libraryContainer">
        <ListContainer />
      </div>
    )
  }
}

export default CreateLibraryContainer
