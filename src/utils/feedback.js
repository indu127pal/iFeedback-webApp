// export const getNextPage = (feedback, currentQuest, currentAnswers) => {
//   let newPage = {}
//   const questions = currentQuest.questions;
//   for (let q of questions) {
//     const links = q.choices
//     if (links) {
//       const k1 = currentAnswers.find(x => x.questionId === q.id)
//       const answerValue = k1.value
//       if (Array.isArray(answerValue)) {
//         for (let aa of answerValue) {
//           const k2 = links.find(y => y.value === aa)
//           if (k2) {
//             const a = parseInt(k2.gotoPageId);
//             newPage = a
//             break
//           } 
//         }
//       } else {
//         const k2 = links.find(y => y.value === answerValue) 
//         if (k2) {
//           const a = parseInt(k2.gotoPageId);
//           newPage = a
//         }
//       }
//     }    
//   }
//   if (newPage) {
//     return feedback.ratings[0].pages.find(x => x.id === newPage)
//   } else
//     return newPage
// }
import history from '../components/History';

export const setAnswer = (id, answer, answers) => {
  if (!answers) {
    answers = []
  }
  let a = answers.find(x => x.questionId === id)
  if (a) {
    answer.push({
      questionId: id,
      value: answer
    })
  }
  return answer;
}

export const getPage = (newId, questions) => {
  const a = parseInt(newId);
  let newQuest = questions.find(x => x.id === a)
  return newQuest;
}

export const getTotalQuestions = (feedback) => {
  let questions = [];
  questions = feedback.questions;
  return questions.length
}
export const updateAnswers = (answers, form_values, questions) => {
  let newAnswers = answers
  for (let q of questions) {
    let fieldName = 'Field_' + q.id
    if (form_values[fieldName]) {
      let a1 = newAnswers.find(x => x.questionId === q.id)  
      if (a1) {
        a1.value = form_values[fieldName]
      } else {
        newAnswers.push({
          questionId: q.id,
          value: form_values[fieldName]
        })
      }
    }
  }
  return newAnswers
}  
 
export const transition = (src) => {
  event.preventDefault();
  location.assign('/page/'+src.gotoQuestionId)
    // history.push({
    //   pathname: event.currentTarget.pathname,
    //   search: event.currentTarget.search
    // });
    // console.log("event" + event.preventDefault);
    // console.log("history" + history.push);
};