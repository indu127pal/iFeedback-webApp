export const getFirstPage = (feedback) => {
  const pages = feedback.pages;
  return pages.find(x => x.start)
}
export const getNextPage = (feedback, currentPage, currentAnswers) => {
  let newPage = {}
  const pages = feedback.pages;
  const questions = currentPage.questions;
  console.log(questions);
  for (let q of questions) {
    const links = q.links
    const k1 = currentAnswers.find(x => x.questionId === q.id)
    const answerValue = k1.value
    if (Array.isArray(answerValue)) {
      for (let aa of answerValue) {
        const k2 = links.find(y => y.value === aa)
        if (k2) {
          newPage = k2.linkedPage
          break
        } 
      }
    } else {
      const k2 = links.find(y => y.value === answerValue) 
      newPage = k2.linkedPage
    }
    if (newPage) break
  }
  if (newPage) 
    return pages.find(x => x.id === newPage)
  else
    return newPage
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
export const getCurrentAnswers = (page) => {
  const questions = page.questions;
  let answers = []
  for (let q of questions) {
    answers.push({
      questionId: q.id,
      value: ''
    })
  }
  return answers
}


