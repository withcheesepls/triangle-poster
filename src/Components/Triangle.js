import React from 'react';
import '../Styles/Triangle.css';

const SQRROOT3 = Math.sqrt(3);

export default class Triangle extends React.Component {
  // return the border size for triangle
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
    let triangleDiff = 32;
    let colorDif = [];
    colorDif.push(Math.round((secondColor[0] > firstColor[0] ? -(secondColor[0] - firstColor[0]) : firstColor[0] - secondColor[0])/amount));
    colorDif.push(Math.round((secondColor[1] > firstColor[1] ? -(secondColor[1] - firstColor[1]) : firstColor[1] - secondColor[1])/amount));
    colorDif.push(Math.round((secondColor[0] > firstColor[2] ? -(secondColor[2] - firstColor[2]) : firstColor[2] - secondColor[2])/amount));
    let fColor = firstColor.slice();
    let sColor = [fColor[0]-colorDif[0], fColor[1]-colorDif[1], fColor[2]-colorDif[2]];
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
        sColor = [fColor[0]-colorDif[0], fColor[1]-colorDif[1], fColor[2]-colorDif[2]];

      }
      width-=triangleDiff;
    }
    return triangles
  }
  getTriangleWidth(width){
    const leftright = width/2;
    const height = width*SQRROOT3/2;
    return `0 ${leftright}px ${height}px ${leftright}px`
  }
  render(){
    const width = this.props.width;
    const firstColor = this.props.firstColor;
    const secondColor = this.props.secondColor;
    const styleTriangleWrapper = {
      width: `${width}px`,
      height: `${width}px`
    }

    return(
      <div style={styleTriangleWrapper} className='triangle-wrapper'>
        {this.createTriangles(this.props.numTriangles, width, firstColor, secondColor)}
      </div>
    )
  }
}
