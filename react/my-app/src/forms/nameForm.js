import React from 'react'
import ReactDOM  from 'react-dom'

class NameForm extends React.Component {
  constructor(props){
    super(props)
    this.state = {value:''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSumbit = this.handleSumbit.bind(this)
  }

  handleChange(e){
    console.log('e',e.target.value)
   this.setState({value:e.target.value}) 
  }

  handleSumbit(event) {
    alert('A name was submited: '+this.state.value)
    event.preventDefault()
  }

  render(){
    return (
      <form onSubmit={this.handleSumbit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}></input>
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}


ReactDOM.render(<NameForm />,document.getElementById('root'))