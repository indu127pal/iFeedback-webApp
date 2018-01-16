import React, { PropTypes } from 'react';

const Textarea = ({ id, answer, onChange }) => {
  console.log(answer)
  return(
  <div className="">
    <textarea className="w-100 br2 b--light-gray gray roboto-regular" rows="4" name={id} onChange={ 
      (e) => { 
          console.log(e)
          onChange(id, e.target.value, null)
        }
      }></textarea>
  </div>
  )
};


Textarea.propTypes = {
  id: PropTypes.number.isRequired,
  answer: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Textarea;
