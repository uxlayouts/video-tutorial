import React, { Component } from 'react';
import TeamMember from './TeamMember';
import dataList from './sample.json';
//import teamInfo from './teamInfo.json';

class OurTeam extends Component {

  render(){
    return(
      <div id="OurTeam" className="light-gray-bg">
        <div className="container-fluid">

          <div className="row">
            <div className="col-md-12">
              <h2 className="h1 text-center padding-bottom-1">Our Team</h2>
              <p className="lead text-center text-muted-dark">Subheader Content here</p>
            </div>
          </div>

          <br />

          <div className="row">
            <TeamMember dataList={dataList}/>
          </div>

        </div>
      </div>
    );
  }
}

export default OurTeam;
