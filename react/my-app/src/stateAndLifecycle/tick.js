import React from 'react';
import ReactDOM from 'react-dom';
import FormattedDate  from './formattedDate';

class Clock extends React.Component{
  constructor(props) {
    super(props)
    this.state = { date: new Date()}
  }

  componentDidMount() {
    this.timeID = setInterval(()=>this.tick(),1000)
  }
  componentWillUnmount() {
    clearInterval(this.timeID)
  }
  tick() {
    this.setState({date:new Date()})
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <FormattedDate date={this.state.date} />
      </div>
    );
  }

}
 

ReactDOM.render(<Clock  />,document.getElementById('root'))


