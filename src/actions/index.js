import * as constants from '../constants';

export function fetchFeedback() {
  return { type: constants.FETCH_FEEDBACK };
}

export function setAnswer(questionId, value) {
  return { 
    type: constants.SET_ANSWER, payload: {
      questionId: questionId,
      value: value
    } 
  };
}

export function getNextPage(values) {
  return { 
    type: constants.GET_NEXT_PAGE,
    payload: {
      form_values: values 
    }
  };
}
