import React from 'react';
import { Route } from 'react-router-dom';
import TransitionGroup from 'react-transition-group/TransitionGroup';

const CSSTransitionRoute = ({ transitionName, ...rest }) => {
  <Route render={(location) => (
    <TransitionGroup
      transitionName={transitionName}
      transitionEnterTimeout={500}
      transitionLeaveTimeout={500}
    >
      <Route
        location={location}
        key={location.key}
        {...rest}
      />
    </TransitionGroup>
  )}/>
};


export default CSSTransitionRoute;
