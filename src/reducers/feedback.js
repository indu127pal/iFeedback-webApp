import * as constants from '../constants';
import { getPage, transition } from '../utils/feedback'

const initialState = {
  feedback: [],
  questions: [],
  currentQuest: {
    id: 0,
    text: '',
    type:'',
    totalQuestions: 0
  },
  loading: true
};

export default function(state = initialState, action) {
  switch (action.type) {
    case constants.FETCH_FEEDBACK:
      return { ...state, loading: true };

    case constants.FETCH_FEEDBACK_SUCCESS:
      return {
          ...state,
          feedback: action.payload.feedback,
          questions: action.payload.questions,
          loading: false,
        };

    case constants.FETCH_FEEDBACK_FAIL:
      return {
        ...state,
        loading: false,
      };
    case constants.SUBMIT_REVIEW: 
      return { ...state, loading: true };
    case constants.SUBMIT_REVIEW_SUCCESS: 
      return {
        ...state
      }
    case constants.SET_TRANSITION:
      let newPageId = action.push.newPageId
      transition(newPageId);
      return {
        ...state
      }
    case constants.SET_PAGE:
      let newId = action.payload.newId
      let Quest = getPage(newId, state.feedback.questions)
     
      return {
        ...state,
        currentQuest: Quest,
        id: Quest.id,
        loading: false,
      };   
    default:
      return state;
  
  }
}

    // case constants.SET_ANSWER:
    //   let qid = action.payload.questionId
    //   let value = action.payload.value
    //   let gotoId = action.payload.gotoId
    //   let currentAnswers = state.currentAnswers;
    //   if (!currentAnswers) {
    //     let a = {
    //       questionId: qid,
    //       value: value
    //     }
    //     currentAnswers.push(a)
    //   } else {
    //     let aa = currentAnswers.find( x => x.questionId === qid);
    //     if (aa) {
    //       aa.value=value
    //     }  else {
    //       let a = {
    //         questionId: qid,
    //         value: value
    //       }
    //       currentAnswers.push(a)
    //     }
    //   }
    //   if (gotoId) {
    //     let newQuest1 = getPage(gotoId, state.feedback.questions)
    //     return {
    //       ...state,
    //       currentQuest: newQuest1,
    //       currentAnswers: currentAnswers
    //     }
    
    //   } else {
    //     return {
    //       ...state,
    //       currentAnswers: currentAnswers,
    //       click: true
    //     }
    //   }