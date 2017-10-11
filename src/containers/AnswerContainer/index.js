import { connect } from 'react-redux';
import Answer from '../../components/Answer';
import { setAnswer } from '../../actions';

const mapDispatchToProps = dispatch => ({
  onClick: (questionId, value) => {
    dispatch(setAnswer(questionId, value));
  },
});

export default connect(null, mapDispatchToProps)(Answer);
