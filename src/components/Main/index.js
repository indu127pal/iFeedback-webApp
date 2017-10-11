import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import PageFormContainer from '../../containers/PageFormContainer';
import LoaderHOC from '../../HOC/LoaderHOC';

const Main = ({ checkAnswer }) => (
  <div className="pa2 mt4 tracked">
    <PageFormContainer/>
  </div>
);

Main.propTypes = {
  checkAnswer: PropTypes.bool,
};

const mapStateToProps = state => ({
  checkAnswer: state.feedback.checkAnswer,
});

export default LoaderHOC(connect(mapStateToProps)(Main));
