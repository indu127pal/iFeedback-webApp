import React, { PropTypes } from 'react';

const Rating = ({ choices, id, answer, onClick }) => {
  let selected = 'tc mt0 fw3 bold'
  return(
  <div className="flex mt3">
    { choices.map( c => (
      <div className="ph2" key={c.id} onClick={
        () => {
            onClick(id, c.value)
            selected = c.value
          }
        }>
        { c.image != null ?
          <img className="" src={c.imageUrl} alt="rate here"/> : ''
        }
        { c.value === selected ?
          <p className="tc mt0 fw3 bold">{c.name}</p> :
          <p className="tc mt0 fw3">{c.name}</p>
        }
        
      </div>
    ))}
  </div>
  )
};

Rating.propTypes = {
  choices: PropTypes.array.isRequired,
  answer: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Rating;
