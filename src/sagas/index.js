import * as constants from '../constants';
import { put, takeLatest, call } from 'redux-saga/effects';
import feedbackJson from './newfeedback.json';
import { fetchReview, submitReview } from '../API';


function* fetchFeedback(action) {
  try {
    const xfeedback = yield call(fetchReview);
    console.log(xfeedback);
    const newfeedback = xfeedback.feedback.reviewDefinition;
    console.log(newfeedback);
    const feedback = newfeedback;
    const questions = newfeedback.questions;
    // const feedback = feedbackJson
    // const questions = feedback.definition.questions
    // console.log(feedback);
    // console.log(questions);
    yield put({
      type: constants.FETCH_FEEDBACK_SUCCESS,
      payload: { feedback, questions },
    });
  } catch (e) {
    // console.log("Error-->")
    console.info(e.message);
    yield put({ type: constants.FETCH_FEEDBACK_FAIL });
  }
}
function* submitFeedback(action) {
  try {
    yield call(submitReview);
    // yield put({ type: constants.SUBMIT_REVIEW_SUCCESS });
  } catch (e) {
    console.info(e.message);
    // yield put({ type: constants.SUBMIT_REVIEW_FAIL });
  }
}

export default function* rootSaga() {
  yield takeLatest(constants.FETCH_FEEDBACK, fetchFeedback);
  yield takeLatest(constants.SUBMIT_REVIEW, submitFeedback);
}