import React from 'react'
import WordInputField from '../components/WordInputField.js'
import DifficultyRadioField from '../components/DifficultyRadioField.js'
import TextAreaField from '../components/TextAreaField.js'

class LibraryNewContainter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      library: "",
      title: "",
      description: "",
      header: "Create New Library"
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleDetails = this.handleDetails.bind(this)
  }

  componentDidMount() {
    let library = {}
    if(this.props.menuContent === "newLibrary") {
      let i = 0;
      while(i < 50) {
        let word = "word" + i
        library[word] = ""
        i += 1
        }
        this.setState({library: library})
      } else {
        let newWord = ""
        this.props.currentLibrary.library.words.forEach(word => {
          newWord = "word" + word.id
          library[newWord] = word.name
        })
        this.setState({
          library: library,
          title: this.props.currentLibrary.library.name,
          description: this.props.currentLibrary.library.description,
          header: this.props.currentLibrary.library.name
         })
      }
    }

    handleSubmit() {
      let formPayload = {
        library: this.state.library,
        title: this.state.title,
        description: this.state.description,
        user: this.props.user_info
      }

      this.props.handleSubmit(formPayload)
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
        let value = this.state.library[word[0]]
        inputContainer.push(
          <WordInputField
            key={"w" + i}
            id={"w" + i}
            name={word[0]}
            value={value}
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
            <div className="listHeader">{this.state.header}</div>
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
                <button id="save" className="submitButton" onClick={this.handleSubmit}>Save</button>
                <button className="submitButton" onClick={this.handleSubmit}>Edit</button>
                <button className="submitButton" onClick={this.handleSubmit}>Clear</button>
            </div>
          </div>
        </div>
      </div>
      </div>
      </div>
    )
  }
}

export default LibraryNewContainter
