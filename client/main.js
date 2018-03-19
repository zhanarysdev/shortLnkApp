import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router ,Switch, Route, withRouter } from 'react-router-dom'
import { Tracker } from 'meteor/tracker'

import Signup from './../imports/ui/Signup'
import Link from './../imports/ui/Link'
import Login from './../imports/ui/Login'
import NotFound from './../imports/ui/NotFound'



const unauthenticatedPages = ['/', '/signup']
const authenticatedPages = ['/link']
const onEnterPublicPage = () => {
  if(Meteor.userId()) {
    window.location = 'link'
  }
}
const routes = (
  <Router>
    <Switch>
      <Route path="/" exact component={Login} onEnter={onEnterPublicPage}/>
      <Route path="/signup" component={Signup} onEnter={onEnterPublicPage}/>
      <Route path="/link" component={Link}/>
      <Route component={NotFound}/>
    </Switch>
  </Router>
)

Tracker.autorun(()=>{
  const isAuthenticate = !!Meteor.userId();
  const pathname = location.pathname
  const isUnauthenticatedPage = unauthenticatedPages.includes(pathname)
  const isAuthenticatedPages = authenticatedPages.includes(pathname)

  if(isUnauthenticatedPage && isAuthenticate) {
    window.location = "/link"
  } else if (isAuthenticatedPages && !isAuthenticate) {
    window.location = "/"
  }
})

Meteor.startup(()=>{
  ReactDOM.render(routes, document.getElementById('root'))
})