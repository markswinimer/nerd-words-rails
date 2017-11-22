import React from 'react'
import WordInputField from '../components/WordInputField.js'
import DifficultyRadioField from '../components/DifficultyRadioField.js'
import TextAreaField from '../components/TextAreaField.js'

class LibraryEditContainter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      library: "",
      title: "",
      description: "",
      inputCount: null,
      originalLib: null,
      newLib: null
    }
    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDetails = this.handleDetails.bind(this)
    this.populateEmptyInputs = this.populateEmptyInputs.bind(this)
  }
  componentDidMount() {
    let library = {}
    let newWord = ""
    let currentLibrary = this.props.currentLibrary.library.words
    currentLibrary.forEach(word => {
      newWord = "word" + word.id
      library[newWord] = word.name
    })
    this.setState({
      library: library,
      title: this.props.currentLibrary.library.name,
      description: this.props.currentLibrary.library.description,
      header: this.props.currentLibrary.library.name,
      inputCount: currentLibrary.length
    })
  }

  populateEmptyInputs() {
    let i = this.state.inputCount
    let max = (this.state.inputCount + 50)
    let libraryClone = this.state.library
    while(i < max) {
      let word = "word" + i
      libraryClone[word] = ""
      i += 1
    }
    let newInputCount = (this.state.inputCount + 50)
    this.setState({
      library: libraryClone,
      originalLib: libraryClone,
      inputCount: newInputCount
    })
  }

  handleUpdate() {
    let library = this.state.library
    Object.keys(library).forEach((key) => (library[key] == "") && delete library[key]);

    let formPayload = {
      library: library,
      title: this.state.title,
      description: this.state.description,
      id: this.props.currentLibrary.library_id
    }

    this.props.handleUpdate(formPayload)
  }

  handleChange(event){
    let cloneLibrary = this.state.library
    cloneLibrary[event.target.name] = event.target.value
    this.setState({library: cloneLibrary})
  }

  handleDetails(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  render() {
    let inputContainer = [];
    let i = 0;
    if(this.state.library) {
      let lib = this.state.library
      let list = Object.entries(lib)
      list.forEach(word => {
        inputContainer.push(
          <WordInputField
            key={"w" + i}
            id={"w" + i}
            name={word[0]}
            value={this.state.library[word[0]]}
            handleDetails={this.handleChange}
          />
        )
        i += 1
      }
    )
  }
  return(
    <div>
      <div className="small-12 large-12 columns libraryTopRight">
      </div>
      <div className="small-12 large-12 columns newLibraryInfo">
        <div className="listHeader">{this.state.header} [Editing]</div>
        <hr className="hrLibrary" />
        <div className="newFormContainer">
          <div className="small-6 large-6 columns leftLibraryForm">
            <form id="list">{inputContainer}</form>
          </div>
          <div className="small-6 large-6 columns rightLibraryForm">
            <div className="libraryNewData">
              <h3 id="title">Library Name</h3>
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
              <div className="newFormButtons">
                <button id="save" className="submitButton" onClick={this.handleUpdate}>Save</button>
                <button id="save" className="submitButton" onClick={this.populateEmptyInputs}>+50</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
}

export default LibraryEditContainter
