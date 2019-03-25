import React, { Component } from 'react';
import Triangle from './Components/Triangle';
import './Styles/App.css';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      fTrianglefirstColor: this.getRandomRGB(),
      fTrianglesecondColor: this.getRandomRGB(),
      sTrianglefirstColor: this.getRandomRGB(),
      sTrianglesecondColor: this.getRandomRGB(),
      switchTriangle: false,
    }
    this.timer = null;
  }

  getRandomRGB(){
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
  }

  componentDidMount(){
    this.timer = setInterval(()=>{
      let newState = {};
      if(this.state.switchTriangle){
        newState.sTrianglefirstColor = this.getRandomRGB();
        newState.sTrianglesecondColor = this.getRandomRGB();
      }
      else {
        newState.fTrianglefirstColor = this.getRandomRGB();
        newState.fTrianglesecondColor = this.getRandomRGB();
      }
      newState.switchTriangle = !this.state.switchTriangle;
      this.setState(newState);
    }, 8200)
  }

  componentWillUnmount(){
    clearInterval(this.timer);
  }
  
  render() {
    return (
      <div className="App">
        <div className={`poster ${this.state.switchTriangle ? 'main-active' : ''}`}>
          <div className='header'>
            <a href='https://dribbble.com/shots/4864465-PosterSeries-BasicBlends-Jungle'>Poster<br/>Source</a>
            <p>/07</p>
          </div>
          <div className='transition-triangle'>
            <Triangle
              width={250}
              numTriangles={6}
              firstColor={this.state.sTrianglefirstColor}
              secondColor={this.state.sTrianglesecondColor}/>
          </div>
          <div className='main-triangle'>
            <Triangle
              width={250}
              numTriangles={6}
              firstColor={this.state.fTrianglefirstColor}
              secondColor={this.state.fTrianglesecondColor}/>
          </div>
          <a href='https://github.com/withcheesepls/triangle-poster'>Source</a>
        </div>
      </div>
    );
  }
}

export default App;
