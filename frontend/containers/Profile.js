import React from 'react';
import ImageDisplay from '../components/ImageDisplay.js';
import AboutHeader from '../components/AboutHeader.js'

class Profile extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="profile-header">
            {/*<ImageDisplay id={1} className="img-responsive" width="200" height="200"/>*/}

            <AboutHeader></AboutHeader>
          </div>
        </div>

        <div className="row marketing">
          <div className="col-lg-6">

            <h4>Background</h4>
            <p>After 5 years in industry working as a Software Engineer in various roles, I've returned to Georgia Tech to pursue my Master's degree full time.</p>

            <h4>Interests</h4>
            <p>I enjoy reading historical non-fiction (check out SPQR by Mary Beard). I'm also a vocal supporter of pedestrian-focused urban planning.</p>

          </div>

          <div className="col-lg-6">
            <h4>Education</h4>
            <p>MSCS Student at Georgia Tech. My research interests are High Performance Computing and Machine Learning.</p>

          </div>
        </div>
      </div>
    )
  }
};

export default Profile;
