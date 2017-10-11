import React, { Component } from 'react';
import loading from './loading.gif';

const LoaderHOC = WrappedComponent => {
  return class LoaderHOC extends Component {
    render() {
      return this.props.loading
        ? <div className="loader">
            <img src={loading} alt="loading" />
          </div>
        : <WrappedComponent />;
    }
  };
};

export default LoaderHOC;
