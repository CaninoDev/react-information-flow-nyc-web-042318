import React, { Component } from 'react'
import { handleClick, handleChildClick } from './randomColorGenerator.js'
import Tier2 from './Tier2'

export default class Tier1 extends Component {
  constructor (props) {
    super(props)
    // const initialColor = getRandomColor()
    this.state = {
      color: this.props.color,
      childColor: this.props.childColor
    }
  }

  render () {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?

    return (
      <div onClick={handleClick.bind(this)} className='tier1' style={{backgroundColor: this.state.color, color: this.state.color}}>
        <Tier2 handleClick={handleChildClick.bind(this)} color={this.state.color} />
        <Tier2 handleClick={handleChildClick.bind(this)} color={this.state.color} />
      </div>
    )
  }
}
