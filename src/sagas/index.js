import * as constants from '../constants';
import { put, takeLatest, call } from 'redux-saga/effects';
import { getFirstPage, getCurrentAnswers } from '../utils/feedback';
// import feedbackJson from './feedback.json';
// import duplicate from './duplicate.json';
// import axios from 'axios';
import { fetchReview } from '../API';
// import current from './current.json';


function* fetchFeedback(action) {
  try {
    const xfeedback = yield call(fetchReview);
    // console.log(feedback.reviewDefinition);
    // const newfeedback = JSON.parse(feedback.reviewDefinition);
    // console.log(xfeedback.feedback);
    const feedback = xfeedback.feedback[0];
    const currentPage = getFirstPage(feedback);
    const currentAnswers = getCurrentAnswers(currentPage);
    // console.log(feedback);
    // console.info(currentPage);
    // console.info(currentAnswers);

    yield put({
      type: constants.FETCH_FEEDBACK_SUCCESS,
      payload: { feedback, currentPage, currentAnswers },
    });

  } catch (e) {
    console.log("Error-->")
    console.info(e.message);
    yield put({ type: constants.FETCH_FEEDBACK_FAIL });
  }
}

export default function* rootSaga() {
  yield takeLatest(constants.FETCH_FEEDBACK, fetchFeedback);
}


// function* fetchFeedback(action) {
//   try {
//     const feedback = duplicate.feedback[0];
//     const currentPage = getFirstPage(feedback);
//     const currentAnswers = getCurrentAnswers(currentPage);
//     // console.info(feedback);
//     // console.info(currentPage);
//     // console.info(currentAnswers);
//     yield put({
//       type: constants.FETCH_FEEDBACK_SUCCESS,
//       payload: { feedback, currentPage, currentAnswers },
//     });
//   } catch (e) {
//     console.info(e.message);
//     yield put({ type: constants.FETCH_FEEDBACK_FAIL });
//   }
// }
// var config = {
//   headers: {
//   'Access-Control-Allow-Origin': '*',
//   'Content-Type': 'application/json',
//   'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTUwNzk2NTgzMH0.j_3dIsn93eAeuOHU6ttWE070Mh-9uTAFSOSZ7ptIyyS7HjjKaMVGJab3x2xSHNwOrBFE1FVKCWNrRQ83j9ZtTA'
//   }
// };
// axios.get('http://139.59.25.97:8080/ratingnreview/api/review-responses/8', config)
// .then(function (response) {
//   console.log('check the response'+response);
//   const feedback = response;
// })
// .catch(function (error) {
//   console.log(error);
// });


// const feedback = yield call(fetchReview);
// console.log(feedback.reviewDefinition);
// const newfeedback = JSON.parse(feedback.reviewDefinition);
// console.log(newfeedback.pages[0]);
// const currentPage = getFirstPage(newfeedback);
// const currentAnswers = getCurrentAnswers(currentPage);