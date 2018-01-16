import React, { Component } from 'react';
import loading from './loading.gif';

const LoaderHOC = WrappedComponent => {
  return class LoaderHOC extends Component {
    render() {
      return this.props.loading
        ? <div className="flex-ns tc justify-center-ns mt6">
            <img src={loading} alt="loading" height="100" width="100" />
          </div>
        : <WrappedComponent />;
    }
  };
};

export default LoaderHOC;
