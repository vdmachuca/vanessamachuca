import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import meImg from '../assets/images/vmachuca_photo.png';

function Main() {

  return (
    <div className="container" id="main">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={meImg} alt="Avatar" />
          <div className="social_icons">
            <a href="https://github.com/vdmachuca" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vanessa-machuca/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
        <div className="content">
          <h1>Vanessa Machuca</h1>
          <p>I am an interdisciplinary geospatial data scientist and creative thinker with a broad background in mathematics, systems biology, ecology, geographic information systems, and remote sensing.</p>
          <p>I am interested in supporting environmental conservation, climate resilience planning, and mending our relationships with each other and the land. 
</>

          <div className="mobile_social_icons">
            <a href="https://github.com/vdmachuca" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/vanessa-machuca/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
