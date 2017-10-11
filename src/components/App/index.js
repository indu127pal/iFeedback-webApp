import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFeedback } from '../../actions'

import Header from '../Header';
import Main from '../Main';
import './app.css'

class App extends Component {
  componentWillMount() {
    this.props.dispatch(fetchFeedback());
  }

  render() {
    return (
      <div>
        <Header title="Customer Feedback" />
        <Main loading={this.props.loading} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.feedback.loading,
});

export default connect(mapStateToProps)(App);
