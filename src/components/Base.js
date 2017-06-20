import React from 'react';
import { renderRoutes } from 'react-router-config';
import Header from './Header';
import Nav from './Nav';
import './Base.css';
import './styles/includes.css';

const Base = ( {route}, {router} ) => (
  <div className="App">
    <Header />
    <Nav />
    {renderRoutes(route.routes)}
  </div>
);

export default Base;
