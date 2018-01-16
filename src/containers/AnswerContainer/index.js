import { connect } from 'react-redux';
import Answer from '../../components/Answer';
import { setAnswer, submitFeedback } from '../../actions';

const mapStateToProps = (state) => ({
  click: state.feedback.click
});

const mapDispatchToProps = dispatch => ({
  submitFeedback: () => {
    dispatch(submitFeedback());
  }
});

export default connect(null, mapDispatchToProps)(Answer);
