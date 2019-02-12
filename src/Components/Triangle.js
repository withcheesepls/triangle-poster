import React from 'react';
import '../Styles/Triangle.css';

export default class Triangle extends React.Component {
  getTriangleStyle(width, firstColor, secondColor, zindex){
    const fColor = `rgb(${firstColor[0]}, ${firstColor[1]}, ${firstColor[2]})`;
    const sColor = `rgb(${secondColor[0]}, ${secondColor[1]}, ${secondColor[2]})`;
    return {
      width: `${width}px`,
      height: `${width}px`,
      backgroundImage: `linear-gradient(120deg, ${fColor}, ${sColor})`,
      zIndex: zindex
    }
  }

  createTriangles(amount, width, firstColor, secondColor){
    let triangles = [];
    let triangleDiff = 32; // this should make sure the width triangle is not less than 0
    let colorDif = firstColor.map((e, i)=> (Math.round((secondColor[i] > firstColor[i] ? -(secondColor[i] - firstColor[i]) : firstColor[i] - secondColor[i])/amount)));
    let fColor = firstColor.slice();
    let sColor = fColor.map((e, i) => e - colorDif[i]);
    let zIndex = 1;
    for(let i = 0; i < amount; i++){
      let style = {};
      if(i === 0) style = this.getTriangleStyle(width, firstColor, firstColor, zIndex++);
      else if(i === amount-1) style = this.getTriangleStyle(width, secondColor, secondColor, zIndex++)
      else style = this.getTriangleStyle(width, sColor, fColor, zIndex++)
      triangles.push(
        <div
          key={`triangle${i}`}
          className='triangle'
          style={style}>
        </div>
      )
      if(i !== 0 || i !== amount-1){
        fColor = sColor.slice();
        sColor = fColor.map((e, i) => e - colorDif[i]);

      }
      width-=triangleDiff;
    }
    return triangles
  }

  render(){
    const {width, numTriangles, firstColor, secondColor} = this.props;
    const styleTriangleWrapper = {
      width: `${width}px`,
      height: `${width}px`
    }
    return(
      <div style={styleTriangleWrapper} className='triangle-wrapper'>
        {this.createTriangles(numTriangles, width, firstColor, secondColor)}
      </div>
    )
  }
}
