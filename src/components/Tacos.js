import React from 'react';
import { renderRoutes } from 'react-router-config';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import VertSwitch from './VertSwitch';
import { NavLink } from 'react-router-dom';
import { shape } from 'prop-types';

const Tacos = ({ route, location }) => (
  <div className="page-wrapper">
    <h2>Tacos</h2>
    <NavLink to="/tacos/chicken">Chicken</NavLink>
    <NavLink to="/tacos/veggie">Veggie</NavLink>
    <div className="page">
      <TransitionGroup component="main">
        <VertSwitch key={location.key} location={location}>
          {renderRoutes(route.routes)}
        </VertSwitch>
      </TransitionGroup>
    </div>
  </div>
)

Tacos.propTypes = {
  location: shape({}),
};

export default Tacos;
