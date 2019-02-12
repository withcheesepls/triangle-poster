import React, { Component } from 'react';
import Triangle from './Components/Triangle';
import './Styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='poster'>
          <div className='header'>
            <a href='https://dribbble.com/shots/4864465-PosterSeries-BasicBlends-Jungle'>Poster<br/>Source</a>
            <p>/07</p>
          </div>
          <Triangle
            width={250}
            numTriangles={6}
            firstColor={[71,65,156]}
            secondColor={[166,215,102]}/>
          <a href='https://github.com/withcheesepls/triangle-poster'>Source</a>
        </div>
      </div>
    );
  }
}

export default App;
