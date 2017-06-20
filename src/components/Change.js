import React from 'react';
import { object } from 'prop-types';

const Change = ( props, {router} ) => {

  const navTo = (event) => {
    router.history.push("/tacos/chicken")
  };

  const goBack = (event) => {
    router.history.goBack()
  };

  return (
    <div className="page-wrapper">
      <h2>Change</h2>
        <button onClick={navTo}>Change route to Chicken Taco</button>
        <button onClick={goBack}>Go Back</button>
    </div>
  );

};

Change.contextTypes = {
  router: object,
}

export default Change;
