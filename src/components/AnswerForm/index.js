import React, { Component, PropTypes } from 'react';
import { Field } from 'redux-form';

const RadioField = ({ input: { name, onChange, value }, id, choices, meta: { touched, error, warning } }) => {
  return(<div className="ph2">
    { choices.map( c => (
      <div className="flex bw1 w70 mv3 shadow-1">
        <p className="" key={c.id} >
          <label className="f6 fw2 mid-gray roboto-regular"><input className="ml2 h1 w1 mr2" type='radio' value={c.value} name={name}  onChange={() => onChange(c.value) }/>{c.name}</label>
        </p>
      </div>
    ))}
  </div>)
} 

const CheckboxField = ({ input: { name, onChange, value }, id, choices, meta: { touched, error, warning } }) => {
  return(<div className="ph2">
    { choices.map( c => ( 
      <div className="flex bw1 w70 mv3 shadow-1">
        <p className="" key={c.id} >
          <label className="f6 fw2 mid-gray roboto-regular"><input className="ml2 h1 mr2" type='checkbox' value={c.value} name={name} onChange={(event) => {
              let newValue = value === '' ? [] : value;
              if (event.target.checked) {
                  newValue.push(c.value);
              } else {
                  newValue.splice(newValue.indexOf(c.value), 1);
              }
              return onChange(newValue);
          }}/>{c.name}</label>
        </p>
      </div>
    ))}
  </div>)
} 

const TextareaField = ({ input: { name, onChange, value }, id, meta: { touched, error, warning } }) => {
  return(<div className="">
    <textarea className="w-100 br2 bg-light-gray b--dark-gray roboto-regular" rows="4" name={name} onChange={onChange}></textarea>
  </div>)
} 

const AnswerForm = props => {
  const { question } = props
  const fieldName = "Field_" + String(question.id)
  switch(question.questionType) {
    case 'RADIO': 
      return (<Field component={RadioField} choices={question.choices} id={question.id} name={fieldName}/>)
    case 'CHECKBOX': 
      return (<Field component={CheckboxField} choices={question.choices} id={question.id} name={fieldName}/>)
    case 'TEXTAREA': 
      return (<Field component={TextareaField} id={question.id} name={fieldName}/>)
    default: 
      return (<div></div>)
  }
};

AnswerForm.propTypes = {
  question: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AnswerForm;
