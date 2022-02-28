import React from 'react'
function Cat(props) {
  const mouse = props.mouse
  return (
    <img src="/cat.jpg" style={{position:'absolute',left:mouse.x,top:mouse.y}} />
  )
}

export default class Mouse extends React.Component {
  constructor(props){
    super(props)

    this.state = {x:0,y:0}
  }

  handleMouseMove(event){
    this.setState({
      x:event.clientX,
      y:event.clientY
    })
  }

  render(){
    return (
      <div style={{height:'100vh'}} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    )
  }
}

class MouseTracker extends React.Component {
  
  renderTheCat(mouse){
    return <Cat mouse={mouse} />
  }

  render(){
    return (
      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={this.renderTheCat} />
      </div>
    )
  }
}


