import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Link extends Component {
    
    onLogout(){
        this.props.history.push('/')
    }
    
    render(){
      return(
        <div>
            <p> some text for start from link component </p>
            <button onClick={this.onLogout.bind(this)}> Logout </button>
        </div>

      )
    }
  }
  

export default Link;