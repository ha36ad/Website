import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import content from '../content';

export default function Navigation() {
  return (
    <div
      style={{
        background: '#1F2833',
      }}
      className="font-dosis fixed top-0 height-auto py-0 w-screen z-40"
    >
      <div className="flex items-center w-10/12  mx-auto py-6">
        <ScrollLink
          to="header"
          smooth={true}
          className="text-3xl  font-bold text-white flex-1 cursor-pointer"
        >
          <h1>
            Hammad Khan
          </h1>
        </ScrollLink>
        
        <div className="flex items-center w-5/12  mx-auto py-auto ">
        <a href="https://github.com/ha36ad" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + "/assets/github.png"} className="githubIcon" width="40" height="30" />
        </a>
        <a href="https://www.linkedin.com/in/hammad-khan-6155921a9/" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + "/assets/linkedin.svg"} className="linkedinIcon" width="40" height="30" />
        </a>
        <a href="mailto:hammad.khan1130@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + "/assets/gmail.png"} className="gmailIcon" width="40" height="30" />
        </a>
      </div>

        <div className="text-white text-xl">
          {content.nav.links.map((link, index) => {
            return (
              <ScrollLink to={link.to} smooth={true}>
                <span className="mr-4 cursor-pointer" key={index}>
                  {link.text}
                </span>
              </ScrollLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
