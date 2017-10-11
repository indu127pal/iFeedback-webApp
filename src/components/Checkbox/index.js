import React, { PropTypes } from 'react';

const Checkbox = ({ choices, id, answer, onClick }) => {
  return(
  <div className="ph2">
    { choices.map( c => (
      <p className="" onClick={() => onClick(id, c.value)} key={c.id} >
        <input className="" type='checkbox' value={c.value} name={id}/>
        <label className="pl2 fw3">{c.name}</label>
      </p>
    ))}
  </div>
  )
};

Checkbox.propTypes = {
  choices: PropTypes.array.isRequired,
  answer: PropTypes.object.isRequired,  
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Checkbox;
