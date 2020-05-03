import React from 'react';
import './App.css';
import ImagesData from './imagesData.js';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
                  angle: 0
                  }
  }

  rotateImage() {
    let angleEle = document.getElementById('angle')
    this.setState({angle:angleEle.value})
  }

  render() {
    console.log(ImagesData)

    let n = ImagesData.length+1
    let angle = this.state.angle
    let gridData = ImagesData
    let stepMax = 50*n

    var rows = gridData.map(function (imgRow, i){
            var partImg = imgRow.map(function (imgSrc, j) {
                return (
                    <div className="column">
                      <img src={imgSrc.addr} key={i*n+j} style={{transformOrigin: (stepMax-100*j)+'% '+(stepMax-100*i)+'%', transform: 'rotate('+angle+'deg)'}} />
                    </div>
                    );
            });
            return (
                <div className="row" key={i}> {partImg} </div>
             );
      });

    return (
      <div className="App">
          <div className="inputTag">
              Enter the angle: <input type="number" name="angle" id="angle"/>
              <button className="button" onClick={this.rotateImage.bind(this)}>Rotate</button>
          </div>
          <div className="container">
              {rows}
          </div>
      </div>
    );
  }
  
}

export default App;
