import * as constants from '../constants';
import { getNextPage,  getCurrentAnswers, updateAnswers } from '../utils/feedback'

const initialState = {
  feedback: [],
  pages:[],
  currentPage: {
    id: 0,
    text: '',
    type:'',
    questions: [],
    totalQuestions: 0
  },
  answers: [],
  currentAnswers: [
    { 
      questionId:0,
      value:''
    }
  ],
  loading: true,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_FEEDBACK:
      return { ...state, loading: true };

case constants.FETCH_FEEDBACK_SUCCESS:
    return {
      ...state,
      feedback: action.payload.feedback,
      currentPage: action.payload.currentPage,
      currentAnswers: action.payload.currentAnswers,
      loading: false,
    };

  case constants.FETCH_FEEDBACK_FAIL:
    return {
      ...state,
      loading: false,
    };
  case constants.SET_ANSWER:
    // console.log(state.currentAnswers)
    let a = state.currentAnswers.find( x => x.questionId === action.payload.questionId);
    a.value = action.payload.value;
    // console.log(state.currentAnswers)
    return {
      ...state,
      currentAnswers: state.currentAnswers
    }
  case constants.GET_NEXT_PAGE:
    // console.log(state.currentPage)
    // console.log(state.currentAnswers)
    let form_values = action.payload.form_values
    let updatedAnswers = updateAnswers(state.answers, form_values, state.currentPage.questions)    
    let newPage = getNextPage(state.feedback, state.currentPage, updatedAnswers)
    let newAnswers = getCurrentAnswers(newPage)
    // console.log(newPage)
    // console.log(newAnswers)
    return {
      ...state,
      feedback: state.feedback,
      answers: updatedAnswers,
      currentPage: newPage,
      currentAnswers: newAnswers,
      loading: false,
    };
    default:
      return state;
  }
}
