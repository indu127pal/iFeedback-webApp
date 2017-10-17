import React, { PropTypes } from 'react';

const Header = ({ title }) => (
  <header className="h3 bg-app-green shadow-4">
    <div className="tc w-100">
      <a className="" href="/"><img className="h3 w-auto" src="/assets/images/ED 1.png" alt="EasyDay"/></a>
    </div>
    <div className="fn tc">
      <h1 className="f3 helvetica ttu mv3 blue fw4">{title || 'Title'}</h1>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
