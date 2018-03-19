import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom'

import Signup from './../imports/ui/Signup'
import Link from './../imports/ui/Link'
import Login from './../imports/ui/Login'
import NotFound from './../imports/ui/NotFound'

const routes = (
  <Router>
    <Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/link" component={Link}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
)

Meteor.startup(()=>{
  ReactDOM.render(routes, document.getElementById('root'))
})