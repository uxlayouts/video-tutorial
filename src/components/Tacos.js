import React from 'react';
import { renderRoutes } from 'react-router-config';
import { NavLink } from 'react-router-dom';

const Tacos = ({ route }) => (
  <div className="page-wrapper">
    <h2>Tacos</h2>
    <NavLink to="/tacos/chicken">Chicken</NavLink>
    <NavLink to="/tacos/veggie">Veggie</NavLink>
    <div className="page">
      {renderRoutes(route.routes)}
    </div>
  </div>
)

export default Tacos;
