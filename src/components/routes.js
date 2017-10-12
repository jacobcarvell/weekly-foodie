import {Router, Route} from 'react-router'
import App from './App'
import About from './App/about'
import Login from './App/login'
import React from 'react'

export default (props) => (
  <Router {...props}>
    <Route path='/' component={App} />
    <Route path='/login' component={Login} />
    <Route path='/about' component={About} />
  </Router>
)
