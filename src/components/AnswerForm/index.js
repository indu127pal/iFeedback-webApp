import React, { Component, PropTypes } from 'react';
import { Field } from 'redux-form';

class RatingField extends Component {
  static propTypes = {
    input: PropTypes.object.isRequired,
    choices: PropTypes.array.isRequired,
    meta: PropTypes.object.isRequired
  }
  constructor(props) {
    super(props)
    this.setSelected = this.setSelected.bind(this)
    this.state = {
      selectedItem: 0
    }
  }
  setSelected(val) {
    this.setState({
      selectedItem: val
    })
  }
  render() {
    const { choices, input } = this.props
    return(<div className="flex mt3">
      { choices.map( c => (
          <SingleRatingField c={c} setSelected={this.setSelected} selectedItem={this.state.selectedItem} onChange={input.onChange} name={input.name} key={c.id}/>
          )
        )
      }
    </div>)  
  }
}
const RatingField1 = ({ input: { name, onChange, value }, choices, meta: { touched, error, warning } }) => {
  let selectedItem=0;
  const setSelected = (val) => {
    selectedItem = val
  }
  return(<div className="flex mt3">
    { choices.map( c => (
        <SingleRatingField c={c} setSelected={setSelected} selectedItem={selectedItem} onChange={onChange} name={name} key={c.id}/>
        )
      )
    }
  </div>)
}  

const SingleRatingField = props => {
  const { c, setSelected, selectedItem, onChange, name } = props
  return (<div className="ph2" key={c.id}>
        <input className="dn" type='radio' name={name} onChange={onChange} value={c.value}/>
        { c.image != null ?
          <img className="" src={c.image} alt="rate here" onClick={() => {
            setSelected(c.value)
            onChange(c.value) 
          }}/> : ''
        }
        { c.value === selectedItem ? 
          <p className="f4 tc mt0 fw7" onClick={() => {
            setSelected(c.value)
            onChange(c.value) 
          }}>{c.name}</p> : 
          <p className="tc mt0 fw3" onClick={() => { 
            setSelected(c.value)
            onChange(c.value) 
          }}>{c.name}</p>
        }
      </div>
    )
}

const RadioField = ({ input: { name, onChange, value }, id, choices, meta: { touched, error, warning } }) => {
  return(<div className="ph2">
    { choices.map( c => (
      <p className="" key={c.id} >
        <label className="pl2 fw3"><input className="mr2" type='radio' value={c.value} name={name}  onChange={() => onChange(c.value) }/>{c.name}</label>
      </p>
    ))}
  </div>)
} 

const CheckboxField = ({ input: { name, onChange, value }, id, choices, meta: { touched, error, warning } }) => {
  return(<div className="ph2">
    { choices.map( c => (
      <p className="" key={c.id} >
        <label className="pl2 fw3"><input className="mr2" type='checkbox' value={c.value} name={name} onChange={(event) => {
            let newValue = value === '' ? [] : value;
            if (event.target.checked) {
                newValue.push(c.value);
            } else {
                newValue.splice(newValue.indexOf(c.value), 1);
            }

            return onChange(newValue);
        }}/>{c.name}</label>
      </p>
    ))}
  </div>)
} 

const TextareaField = ({ input: { name, onChange, value }, id, meta: { touched, error, warning } }) => {
  return(<div className="">
    <textarea className="w-100 br2 b--light-gray gray" rows="4" name={name} onChange={onChange}></textarea>
  </div>)
} 

const AnswerForm = props => {
  const { question } = props
  const fieldName = "Field_" + String(question.id)
  switch(question.questionType) {
    case 'RATING': 
      return (<Field component={RatingField} choices={question.choices} name={fieldName} id={question.id}/>)
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
