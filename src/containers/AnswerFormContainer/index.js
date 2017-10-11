import { connect } from 'react-redux';
import AnswerForm from '../../components/AnswerForm';
import { setAnswer } from '../../actions';

const mapDispatchToProps = dispatch => ({
  onClick: (questionId, value) => {
    dispatch(setAnswer(questionId, value));
  },
});

export default connect(null, mapDispatchToProps)(AnswerForm);
