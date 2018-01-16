import { connect } from 'react-redux';
import AnswerForm from '../../components/AnswerForm';
import { setAnswer } from '../../actions';

const mapDispatchToProps = dispatch => ({
  onClick: (e,questionId, value, gotoId) => {
    e.preventDefault()
    dispatch(setAnswer(questionId, value, gotoId));
  },
});

export default connect(null, mapDispatchToProps)(AnswerForm);
