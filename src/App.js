import React from 'react'
import { hot } from 'react-hot-loader'
import logo from './images/logo.png'
import './App.css'
const App = () => (
  <div>
    <img src={logo} />
    <h1>Webpack React Setup.</h1>
  </div>
)
export default hot(module)(App)