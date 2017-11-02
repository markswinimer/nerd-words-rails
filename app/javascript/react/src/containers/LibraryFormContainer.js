import React from 'react'
import WordInputField from '../components/WordInputField.js'
import DifficultyRadioField from '../components/DifficultyRadioField'

class LibraryFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current_user: props.current_user,
      library: null,
      difficulty: null
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    if(this.state.library === null) {
      let i = 0;
      let library = []
      while(i < 50) {
        let word = "word" + i
        library.push({[word]: ""})
        i += 1
        }
        this.setState({library: library})
      }
    }

  handleChange(event){
    let cloneLibrary = this.state.library
    cloneLibrary[event.target.id][event.target.name] = event.target.value
    this.setState({library: cloneLibrary})
  }

  handleSubmit() {
    event.preventDefault();
    let formPayload = {
      library: this.state.library,
      user_id: this.state.current_user}
    fetch('/api/v1/words', {
      method: 'POST',
      body: JSON.stringify(formPayload)}
    )
  }

  render() {
    let inputContainer = [];
    let difficultyContainer = [];
    let i = 0;
    while(i < 50) {
      let word = "word" + i
      inputContainer.push(
        <WordInputField
        key={"w" + i}
        id={i}
        placeholder={i + 1}
        name={word}
        handleChange={this.handleChange}
        value={this.state.value}
      />)
      difficultyContainer.push(
        <DifficultyRadioField
          key={"d" + i}
          onChange={this.handleChange}
          name={"difficulty " + i}
        />)
      i += 1
    }
    return(
      <div>
        <div className="small-12 large-12 libraryContainer">
          <div className="small-12 large-12 columns libraryLabels">
            <h3>List Name...</h3>
          </div>
        <div className="large-12 columns library">
        <div className="small-8 large-8 columns leftLibraryForm">
          <form id="list">
            {inputContainer}
          </form>
        <div>
        </div>
        </div>
        <div className="small-4 large-4 columns rightLibraryForm">
        <form id="difficulty">
          {difficultyContainer}
        </form>
        </div>
      </div>
        <div className="small-12 large-12 columns buttons">
          <button className="createButton" onClick={this.handleSubmit}>CREATE</button>
          <button className="createButton" onClick={this.handleSubmit}>RESET</button>
        </div>
      </div>
      </div>
    )
  }
}
export default LibraryFormContainer
