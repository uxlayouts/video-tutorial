import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Route, NavLink } from 'react-router-dom';
import { object } from 'prop-types';

const Tacos = ({ route }) => (
  <div className="page-wrapper">
    <h2>Tacos</h2>
    <NavLink to="/tacos/chicken">Chicken</NavLink>
    <NavLink to="/tacos/veggie">Veggie</NavLink>
    <Route render={({location}) => {
      return (
        <div className="page">
          {renderRoutes(route.routes)}
        </div>
      );
    }} />
  </div>
)

Tacos.contextTypes = {
  router: object
}

export default Tacos;
