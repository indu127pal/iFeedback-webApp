import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import QuestionFormContainer from '../../containers/QuestionFormContainer'
import NavigationContainer from '../../containers/NavigationContainer'
import { getNextPage } from '../../actions';

const submitPage = (values, dispatch) => {
  dispatch(getNextPage(values))
}

const PageForm = props => {
  const { handleSubmit, page, feedback, answers, form, getNextPage } = props
  const customer = feedback.feedback.customer
  const questions = page.questions
  const getAnswer = (q) => {
    const a = answers.find(x => x.questionId===q.id)
    return a
  }

  return(
  <form className="" onSubmit={handleSubmit}>
    { customer && customer.name !== "" && page.start && 
      <h3 className="f5 fw4 pt3 pl3 pb1 mv1">{page.greeting} {customer.name},</h3>
    }
    { questions.map( q => (
      <QuestionFormContainer key={q.id} question={q} answer={getAnswer(q)}/>
    ))}
    <NavigationContainer getNextPage={getNextPage} final={page.final} />
  </form>
  )  
}

PageForm.propTypes = {
  feedback: PropTypes.object.isRequired,
  page: PropTypes.object.isRequired,
  answers: PropTypes.array.isRequired,
  getNextPage: PropTypes.func.isRequired,
};

export default reduxForm({
  form: 'feedback_form',
  onSubmit: submitPage
})(PageForm)