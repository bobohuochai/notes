import Mouse from './catMouse'
import React from 'react'

function withMouse(WrapComponent){
  return class extends React.Component{
    render(){
      return (
        <Mouse render={mouse=>(
          <WrapComponent mouse={mouse} {...this.props}  />
        )}
        />
      )
    }
  }
}