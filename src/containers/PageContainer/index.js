import { connect } from 'react-redux';
import Page from '../../components/Page';
import { getNextPage } from '../../actions';

const mapStateToProps = state => ({
  page: state.feedback.currentPage,
  answers: state.feedback.currentAnswers,
  feedback: state.feedback
});

const mapDispatchToProps = dispatch => ({
  getNextPage: () => {
    dispatch(getNextPage());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Page);
