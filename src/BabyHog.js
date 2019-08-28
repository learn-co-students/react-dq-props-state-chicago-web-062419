import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import normalBaby from './assets/unadulterated-hoglette.png'
import SunBaby from './assets/sun-eyes.png'
import BlueBaby from './assets/blue-eyes.png'
import GlowingBaby from './assets/glowing-eyes.png'

// is there a way we could associate eye color string values with images? 
// perhaps so we could do something along the lines of `eyeColorMapper['blue'] and get back the right image?`

export default class BabyHog extends Component {

  constructor(props) {
    console.log(props)
    super(props)
    this.name = props.pigTraits.name
    this.hobby = props.pigTraits.hobby
    this.state = {
      weight: 140,
      image: normalBaby
    }
  }

  changeWeight = (e) => {
    // nothing needs to change here
    const newWeight = e.target.name === "+" ? (this.state.weight + 10) : (this.state.weight - 10)
    this.setState({
      weight: newWeight
    })
  }

  changeImage = () => {
    let eyeColor = this.props.eyeColor
    if(eyeColor === 'blue'){
      return BlueBaby
    } else if(eyeColor === 'glowing'){
      return GlowingBaby
    } else if(eyeColor === 'sun') {
      return SunBaby
    } else {
      return normalBaby
    }
  }

  render() {
    let e = this.changeImage()
    return (
      <li className="hogbabies">
        <h1>{this.name}</h1>
        <h3>Weight: {this.state.weight}</h3>
        <h3>Hobby: {this.hobby}</h3>
        <h4>Eye Color: {this.props.eyeColor}</h4>
          
        <Button 
          name="+" 
          onClick={this.changeWeight}>
          Increase Weight
        </Button>
        <Button 
          name="-" 
          onClick={this.changeWeight}>
          Decrease Weight
        </Button>

        <div className="hb-wrap">
          <img src={e} style={{height: '200px'}} alt="MasterBlasterJrJr" />
        </div>
        
      </li>
    )
  }
}
