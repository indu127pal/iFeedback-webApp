import React, { PropTypes } from 'react';

const Header = ({ title }) => (
  <header className="app-h10 bg-app-brand-accent1 ">
    <div className="tc w-100">
      <a className="" href="/"><img className="pt3 app-h6 w-auto" src="/assets/images/Logo.png" alt="EasyDay"/></a>
      <h3 className="black roboto-regular f3 pt1 pl3 pb1 mv1">{title}</h3>
    </div>
  </header>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

{/* <div className="fn tc">
      <h1 className="f3 helvetica ttu mv3 blue fw4">{title || 'Title'}</h1>
</div> How was your experience?*/}