import React, { Component } from 'react';
import { connect } from 'react-redux';
import './app.css'
import Main from '../Main';
import { fetchFeedback } from '../../actions'

class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchFeedback());
  }
  componentDidMount() {
    window.scrollTo(0,5);
  }
  render() {
    return (        
        <div className="">
          <Main loading={this.props.loading} />
        </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.feedback.loading,
});

export default connect(mapStateToProps)(App);
