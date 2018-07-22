import React, { Component } from 'react'
import './App.css'
import Tier1 from './Tier1.js'
import { getRandomColor, getReducedColor } from './randomColorGenerator.js'
class App extends Component {
  render () {
    const tierColor = getRandomColor()
    const childTierColor = getReducedColor(tierColor)
    return (
      <div className='App'>
        <Tier1 color={tierColor} childColor={childTierColor} />
        <Tier1 color={tierColor} childColor={childTierColor} />
      </div>
    )
  }
}

export default App
