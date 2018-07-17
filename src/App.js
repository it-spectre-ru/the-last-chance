import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import Router from 'Router'

import createStore from './Stores'
import gridConfig from './Config/Grid'

import 'sanitize.css/sanitize.css'
import './App.css'

const store = createStore()

class App extends Component {
  render () {
    return (
      <ThemeProvider theme={gridConfig}>
        <Provider store={store}>
          <Router />
        </Provider>
      </ThemeProvider>
    )
  }
}

export default App
