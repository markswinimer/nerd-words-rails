import React from 'react'
import WordInputField from '../components/WordInputField.js'
import DifficultyRadioField from '../components/DifficultyRadioField.js'
import TextAreaField from '../components/TextAreaField.js'

class LibraryNewContainter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      library: null,
      title: "",
      description: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDetails = this.handleDetails.bind(this)
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

    handleSubmit() {
      event.preventDefault();
      let formPayload = {
        library: this.state.library,
        title: this.state.title,
        description: this.state.description,
        user: this.props.user_info}
      fetch('/api/v1/words.json', {
        credentials: 'same-origin',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formPayload)}
      )
    }

    handleChange(event){
      let cloneLibrary = this.state.library
      cloneLibrary[event.target.id][event.target.name] = event.target.value
      this.setState({library: cloneLibrary})
    }

    handleDetails(event) {
      this.setState({ [event.target.name]: event.target.value })
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
        handleDetails={this.handleChange}
      />)
      i += 1
    }

    return(
      <div>
        <div className="small-12 large-12 columns libraryTopRight">
        </div>
          <div className="small-12 large-12 columns newLibraryInfo">
            <div className="listHeader">Create New Library</div>
          <hr className="hrLibrary" />
          <div className="small-6 large-6 columns leftLibraryForm">
            <form id="list">{inputContainer}</form>
          </div>
        <div className="small-6 large-6 columns rightLibraryForm">
          <div className="libraryNewData">
            <button id="save" className="submitButton" onClick={this.handleSubmit}>Save</button>
            <button className="submitButton" onClick={this.handleSubmit}>Edit</button>
            <button className="submitButton" onClick={this.handleSubmit}>Clear</button>
            <h3>Library Name</h3>
            <WordInputField
              placeholder="List Name..."
              name="title"
              value={this.state.title}
              handleDetails={this.handleDetails}
              />
            <h3>Library Description</h3>
            <TextAreaField
              placeholder="Library Description..."
              name="description"
              value={this.state.description}
              handleDetails={this.handleDetails}
              />
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default LibraryNewContainter
