import * as constants from '../constants';
import { put, takeLatest } from 'redux-saga/effects';
import { getFirstPage, getCurrentAnswers } from '../utils/feedback';
import feedbackJson from './feedback.json';

function* fetchFeedback(action) {
  try {
    const feedback = feedbackJson.feedback[0];
    const currentPage = getFirstPage(feedback);
    const currentAnswers = getCurrentAnswers(currentPage);
    // console.info(feedback);
    // console.info(currentPage);
    // console.info(currentAnswers);
    yield put({
      type: constants.FETCH_FEEDBACK_SUCCESS,
      payload: { feedback, currentPage, currentAnswers },
    });
  } catch (e) {
    console.info(e.message);
    yield put({ type: constants.FETCH_FEEDBACK_FAIL });
  }
}

export default function* rootSaga() {
  yield takeLatest(constants.FETCH_FEEDBACK, fetchFeedback);
}
