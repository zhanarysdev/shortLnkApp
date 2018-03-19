import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Accounts } from 'meteor/accounts-base'

class Signup extends Component {
    state = {
        error: ''
    }
    onSubmit(e){
        e.preventDefault()
        let email = this.refs.email.value.trim()
        let password = this.refs.password.value.trim()
        Accounts.createUser({email,password}, (err)=>{
            console.log('signup callback', err)
        })


        this.setState({
            error: 'Somthin wrong'
        })
    }
    render(){
      return(
        <div>
            <p> Join short Link </p>
            { this.state.error ? <p>{this.state.error}</p> : undefined }
            <form onSubmit={this.onSubmit.bind(this)}>
                <input type="email" ref="email" name="email" placeholder="Email" />
                <input type="password" ref="password" name="password" placeholder="Password" />
                <button> Create Account </button>
            </form>
            <Link to="/"> already have an account? </Link>
        </div>
      )
    }
  }
  

export default Signup;