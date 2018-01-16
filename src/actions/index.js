import * as constants from '../constants';

export function fetchFeedback() {
  return { type: constants.FETCH_FEEDBACK };
}
export function submitFeedback() {
  return { type: constants.SUBMIT_REVIEW };
}

export function setPage(newId) {
  return { 
    type: constants.SET_PAGE,
    payload: {
      newId: newId
    }
  }
}
export function setTransition(newPageId) {
  return {
    type: constants.SET_TRANSITION,
    payload: {
      newPageId: newPageId
    }
  }
}

// export function setAnswer(questionId, value, gotoId) {
//   return { 
//     type: constants.SET_ANSWER, 
//     payload: {
//       questionId: questionId,
//       value: value,
//       gotoId: gotoId
//     } 
//   };
// }
