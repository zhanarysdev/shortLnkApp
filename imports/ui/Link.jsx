import React, { Component } from 'react'
import { Accounts } from 'meteor/accounts-base'

class Link extends Component {
    
    onLogout(){
        Accounts.logout()
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