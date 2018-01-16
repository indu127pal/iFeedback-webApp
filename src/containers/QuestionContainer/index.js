import { connect } from 'react-redux';
import Question from '../../components/Question';
import { setPage } from '../../actions';

const mapStateToProps = (state) => ({
    feedback: state.feedback,
    question: state.feedback.currentQuest,
  });

const mapDispatchToProps = dispatch => ({
    setPage: (gotoId) => {
        dispatch(setPage(gotoId))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Question);
