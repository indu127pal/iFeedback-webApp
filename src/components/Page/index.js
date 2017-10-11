import React, { PropTypes } from 'react';
import QuestionContainer from '../../containers/QuestionContainer'
import NavigationContainer from '../../containers/NavigationContainer'

const Page = ({ page, answers, getNextPage }) => {
  const questions = page.questions
  const getAnswer = (q) => {
    const a = answers.find(x => x.questionId===q.id)
    return a
  }
  return(
  <div className="">
    { questions.map( q => (
      <QuestionContainer key={q.id} question={q} answer={getAnswer(q)}/>
    ))}
    <NavigationContainer getNextPage={getNextPage} final={page.final} />
  </div>
  )
};

Page.propTypes = {
  page: PropTypes.object.isRequired,
  answers: PropTypes.array.isRequired,
  getNextPage: PropTypes.func.isRequired,
};

export default Page;
