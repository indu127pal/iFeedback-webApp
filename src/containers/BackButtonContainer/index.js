import { connect } from 'react-redux';
import BackButton from '../../components/BackButton';
import { setPath } from '../../actions';

const mapStateToProps = (state) => ({
  question: state.feedback.currentQuest,
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(BackButton);
