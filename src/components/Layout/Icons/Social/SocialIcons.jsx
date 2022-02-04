import React from 'react';
import SocialIcon from './SocialIcon';
import insta from "../../../../../static/img/svg/instagram.svg"
import github from "../../../../../static/img/svg/github.svg"
import linkedin from "../../../../../static/img/svg/linkedin.svg"

const instaLink = "https://www.instagram.com/anthonya_design/"
const githubLink = "https://github.com/anthonyc-a"
const linkedLink = "https://www.linkedin.com/in/anthony-animba/"

const SocialIcons = () => {
  return <div className='social-icons'>
      <SocialIcon img={insta} link={instaLink} />
      <SocialIcon img={github} link={githubLink} />
      <SocialIcon img={linkedin} link={linkedLink} />
  </div>;
};

export default SocialIcons;
