import  ReactDOM  from "react-dom"
function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>
}

export default function Greeting(props) {
  return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />
}

