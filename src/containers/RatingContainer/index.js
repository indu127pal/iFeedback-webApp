import { connect } from 'react-redux';
import Rating from '../../components/Rating';
import { setPage, submitFeedback } from '../../actions';

const mapStateToProps = (state) => ({
  question: state.feedback.questions[0]
});

const mapDispatchToProps = dispatch => ({
  setPage: (newId) => {
    dispatch(setPage(newId));
  },
  submitFeedback: () => {
    dispatch(submitFeedback());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Rating);
