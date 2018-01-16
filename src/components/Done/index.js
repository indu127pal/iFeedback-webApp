import React, { Component, PropTypes } from 'react';
import history from '../History';

class Done extends Component {
  constructor(props) {
    super(props);
    this.onclick = this.onclick.bind(this);
  }
  onclick() {
    this.props.submitFeedback();
  }
  render() {
    const { submitFeedback } = this.props
    return (
      <div className="">
        <a href="/thankyou" className="link">
          <button className="bg-app-brand-accent1 outline-0 app-h2 w-80 br0 bw0 f4 black fw7 mb4 roboto-regular" onClick={this.onclick}>
              DONE
          </button>
        </a>
      </div>
    )
  }
}

export default Done;