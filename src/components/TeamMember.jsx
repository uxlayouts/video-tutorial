import React from 'react';
import sampleImg from './placeholder-small.png';
const TeamMember = (props) => {
  return(
      <div>
        {props.dataList.map( ({ id, first_name, last_name, phone, address, city, state, zip }) => (
          <div className="col-md-3 col-sm-6 col-xs-12 margin-bottom-3 team-stagger TeamMemberStyle" key={id}>
            <div className="text-center item-slim">
              <div className="round center">
                <img className="img-responsive" src={sampleImg} alt="placeholder" />
              </div>
              <p className="text-center text-muted-dark">
                {first_name} {last_name}<br /><br />
                {phone}<br /><br />
                {address}<br /><br />
                {city} {state} {zip}
              </p>
            </div>
          </div>
        ))}
      </div>

    );
}

export default TeamMember;

//
// import React, { Component } from 'react';
//
// const TeamMember = (props) => {
//   return(
//       <div>
//         {props.dataList.map( ({ id, name, position, email }) => (
//           <div className="col-md-3 col-sm-6 col-xs-12 padding-bottom-4 team-stagger TeamMemberStyle item" key={id}>
//             <div className="round center img-wrapper">
//               <img src="http://placekitten.com/g/175/175" alt="placeholder" />
//             </div>
//             <div className="text-center padding-top-3">
//               <p className="text-muted-dark">
//                 {name}<br></br>
//                 {position}<br></br>
//                 {email}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//
//     );
// }
//
// export default TeamMember;
