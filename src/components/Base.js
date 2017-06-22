import React from 'react';
import { renderRoutes } from 'react-router-config';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import { shape } from 'prop-types';
import Header from './Header';
import './Base.css';
import './styles/includes.css';

const Base = ({route, location}, {router}) => (
  <div className="App">
    <Header />
    <ReactCSSTransitionReplace
      transitionName="cross-fade"
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}
    >
      {renderRoutes(route.routes, { key: location.pathname,})}
    </ReactCSSTransitionReplace>
  </div>
);

Base.propTypes = {
  location: shape({}),
};

export default Base;

// <SomeComponent key="uniqueValue"/>


// Works!

// import React from 'react';
// import { renderRoutes } from 'react-router-config';
// import EasyTransition from 'react-easy-transition';
// import { shape } from 'prop-types';
// import Header from './Header';
// import './Base.css';
// import './styles/includes.css';
//
// const Base = ({route, location}, {router}) => (
//   <div className="App">
//     <Header />
//       <EasyTransition
//         path={location.pathname}
//         initialStyle={{ opacity: 0, top: -40, position: 'relative' }}
//         transition="all .5s .2s ease-out"
//         finalStyle={{ opacity: 1, top: 0 }}
//         className="pageTransition"
//       >
//         {renderRoutes(route.routes)}
//       </EasyTransition>
//   </div>
// );
//
// Base.propTypes = {
//   location: shape({}),
// };
//
// export default Base;


// import React from 'react';
// import { renderRoutes } from 'react-router-config';
// import Header from './Header';
// import './Base.css';
// import './styles/includes.css';
//
// const Base = ({route}, {router}) => (
//   <div className="App">
//     <Header />
//     {renderRoutes(route.routes)}
//   </div>
// );
//
// export default Base;
