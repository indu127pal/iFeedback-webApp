import { connect } from 'react-redux';
import FeedbackPage from '../../components/FeedbackPage';

const mapStateToProps = state => ({
  feedback: state.feedback,
  questions: state.feedback.questions
});

const mapDispatchToProps = dispatch => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(FeedbackPage);
