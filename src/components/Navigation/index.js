import React, { PropTypes } from 'react';

const Navigation = ({ getNextPage, final }) => {
  function gotoFuturePage () {
    window.location.href = 'http://www.futuregroup.in'
  }

  return(
  <div className="tc">
    {!final && <button className="bg-app-dark-green pv2 ph5 bn br2 white tracked" type='submit'>Next</button>}
    {final && <button className="bg-app-dark-green pv2 ph5 bn br2 white tracked" type='button' onClick={gotoFuturePage}>Finish</button>}
  </div>
  )
};

Navigation.propTypes = {
  final: PropTypes.bool.isRequired,
  getNextPage: PropTypes.func.isRequired
};

export default Navigation;
