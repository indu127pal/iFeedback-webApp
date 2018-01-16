import React, { Component } from 'react';
import history from '../History';

class BackButton extends Component {
  constructor(props) {
    super(props);
    this.onBack = this.onBack.bind(this);
    this.onCancel = this.onCancel.bind(this);
  }
  onBack(history) {
    // console.log("back");
    // history.go(-2);
    history.goBack();
  }
  onCancel() {
    // var ww = window.open(window.location); 
    // ww.close();
    // var myWindow = window.open("", "_self");
    // myWindow.document.write("");
    // setTimeout (function() {myWindow.close();},1000);
    var ww = window.open(location.href, '_self');
    window.close();
  }
  
  render() {
    const {option} = this.props
    return (
      <div className="">
      { this.props.option === "true" &&
      <button className="bg-app-dark-green app-h2 outline-0 bw0 w-100 br0" onClick={() => this.onBack(history)}>
        <div className="flex">
        <div className="flex-1 mv2 ml2">
          <img className="h1 w1" src="/assets/images/left-arrow.png" alt="EasyDay"/> 
        </div>
          <h5 className="f5 white ml3 mv2 fw4 roboto-regular">EasyDay Club</h5>
        </div>
      </button>
        }
        {
          this.props.option === "false" && 
          <button className="bg-app-dark-green app-h2 outline-0 bw0 w-100 br0" onClick={() => this.onCancel()}>
          <div className="flex">
          <div className="flex-1 mv2 ml2">
            <img className="h1 w1" src="/assets/images/cancel.png" alt="EasyDay"/>
          </div>
            <h5 className="f5 white ml3 mv2 fw4 roboto-regular">EasyDay Club</h5>
          </div>
        </button>
        }
      </div> 
    )
  }
}

export default BackButton;