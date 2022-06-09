import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import '../css/Sidebar.css';


export default function Sidebar(){
  return (
    <div className="stick_follow_icon">
      <ul>

          <li>
            <a href="https://github.com/crispyinuo" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>
          </li>


          <li>
            <a href="https://www.linkedin.com/in/crispyinuo/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
          </li>

          <li>
            <a href="mailto: zoezhou0423@gmail.com">
              <FaEnvelope />
            </a>
          </li>


      </ul>
      <p>Contact me</p>
    </div>
  );
};