import React from "react";
import ReactDOM  from "react-dom";
import Greeting from './greeting'

function LoginButton(props) {
  return (<button onClick={props.onClick}>Login</button>)
}

function LogouButton(props){
  return (<button onClick={props.onClick}>Logout</button>)
}

class LoginControl extends React.Component {
  constructor(props){
    super(props)
    this.state = { isLoggedIn:false }
  }
 

  handleLoginClick = ()=>{
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick =()=>{
    this.setState({isLoggedIn: false});
  }
  
  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button
    if(isLoggedIn) {
      button = <LogouButton onClick={this.handleLogoutClick} />
    }else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
         {button}
      </div>
    )
  }
}

ReactDOM.render(
  <LoginControl />,
  document.getElementById('root')
)