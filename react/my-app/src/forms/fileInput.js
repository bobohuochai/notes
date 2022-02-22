import React from 'react'
import  ReactDOM  from 'react-dom'
class FileInput extends React.Component {
  constructor(props){
    super(props)
    this.fileInput = React.createRef()
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e){
    e.preventDefault()
    alert(`Selected file - ${this.fileInput.current.files[0].name}`)
  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={this.fileInput}></input>
        <br />
        <button type="submit">Submit</button>
      </label>
    </form>)
  }
}

ReactDOM.render(
  <FileInput />,
  document.getElementById('root')
)