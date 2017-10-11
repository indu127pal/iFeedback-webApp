import { connect } from 'react-redux';
import PageForm from '../../components/PageForm';
import { getNextPage } from '../../actions';

const mapStateToProps = state => ({
  feedback: state.feedback,
  page: state.feedback.currentPage,
  answers: state.feedback.currentAnswers,
  feedback: state.feedback
});

const mapDispatchToProps = dispatch => ({
  getNextPage: (values) => {
    dispatch(getNextPage(values));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PageForm);
