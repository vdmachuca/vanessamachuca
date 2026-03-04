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
          <p>I am a data scientist and creative thinker with a background in math, ecology, GIS, and applied remote sensing.</p>
          <p>I want to use my skillset to support environmental justice, conservation, and climate action.</>

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
