import React from 'react'
import WordInputField from '../components/WordInputField.js'

class ListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    let inputContainer = [];
    let i = 0;
    while(i < 50) {
      inputContainer.push(
        <WordInputField
        key={i}
        placeholder="word"
        name="NAME"
        value={this.state.value}
      />)
      i += 1
    }
    return(
      <div className="listContainer">
        <form onsubmit={this.handleSubmit}>
          {inputContainer}
        </form>
      </div>
    )
  }
}
export default ListContainer
