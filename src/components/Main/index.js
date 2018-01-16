import React, { Component } from 'react';
import { connect } from 'react-redux';
import FeedbackContainer from '../../containers/FeedbackContainer';
import LoaderHOC from '../../HOC/LoaderHOC';

class Main extends Component {
  render() {
      return (
        <div className="">
            <FeedbackContainer />
        </div>
      )
    }
}

const mapStateToProps = state => ({
  
});

export default LoaderHOC(connect(mapStateToProps)(Main));
