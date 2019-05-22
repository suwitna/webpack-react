import React from 'react'
import { hot } from 'react-hot-loader'
import mika from './images/mika.jpg'
import './App.css'
const App = () => (
  <div>
    <h1>Happy Birth Day 3 month :) Mika Baby, 3000</h1>
    <img src={mika}/>
  </div>
)
export default hot(module)(App)