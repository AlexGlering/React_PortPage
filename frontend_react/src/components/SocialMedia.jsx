import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a href="https://www.linkedin.com/in/alexanderglering/">
          <BsLinkedin />
        </a>
      </div>
      <div>
        <a href="https://github.com/AlexGlering">
          <BsGithub />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/afglering">
          <FaFacebook />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
