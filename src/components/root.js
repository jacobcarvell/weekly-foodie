import React, {Component} from 'react'
import {Provider} from 'react-redux'
import {browserHistory} from 'react-router'
import {init as firebaseInit} from 'js/firebase'
import configureStore from './configureStore'
import Routes from './routes'

export default class Root extends Component {
  constructor(props) {
    super(props)
    firebaseInit()
    this.store = configureStore()
  }
render() {
    return (
      <Routes history={browserHistory}/>
    )
  }
}
