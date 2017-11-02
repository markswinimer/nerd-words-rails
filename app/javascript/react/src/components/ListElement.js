import React from 'react'

class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }
  render() {
    return(
      <div>{this.props.name}
        <hr />
      </div>
    )
  }
}
export default ListElement
