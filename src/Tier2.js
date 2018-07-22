import React, { Component } from 'react'
import { handleChildClick, getReducedColor } from './randomColorGenerator.js'
import Tier3 from './Tier3'

export default class Tier2 extends Component {
  constructor (props) {
    super(props)
    this.state = {
      childColor: getReducedColor(this.props.color)
    }
  }

  render () {
    // hard coded color values have been added below, though they won't be
    // present in our solution. What should they be replaced with?
    return (
      <div onClick={this.props.handleClick} className='tier2' style={{backgroundColor: this.props.color, color: this.props.color}}>
        <Tier3 handleClick={handleChildClick.bind(this)} color={this.state.childColor} />
        <Tier3 handleClick={handleChildClick.bind(this)} color={this.state.childColor} />
      </div>
    )
  }
}
