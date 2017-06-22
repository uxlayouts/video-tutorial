import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';

const App = () => {
  return (
    <Router>
      {renderRoutes(routes)}
    </Router>
  );
}

export default App;

// import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import { renderRoutes } from 'react-router-config';
// import EasyTransition from 'react-easy-transition';
// import { shape } from 'prop-types';
// import routes from './routes';
//
// const App = (location) => {
//   return (
//     <Router>
//       <EasyTransition
//         path={location.pathname}
//         initialStyle={{opacity: 0}}
//         transition="opacity 0.35s ease-out"
//         finalStyle={{opacity: 1}}
//         leaveStyle={{opacity: 0}}
//       >
//       {renderRoutes(routes)}
//       </EasyTransition>
//     </Router>
//   );
// }
//
// App.propTypes = {
//   location: shape({}),
// };
//
// export default App;
