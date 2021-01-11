
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "./style.css";
export default () => (
    <Carousel showThumbs={false} showStatus={false}> 
      <div Classname = "" >    
      <a> <img src={"https://www.python.org/static/community_logos/python-logo-generic.svg"} 
      className="PyIcon" />
        </a>  
          <button
          ClassName = "ButtonIcon"
   class ="  py-5  bg-indigo-500 px-10 text-lg uppercase text-white rounded-lg mt-5 hover:bg-indigo-300 transform "
    onClick={(e) => {
      e.preventDefault();
      window.open("https://github.com/ha36ad/SpotlightProject", "_blank");
      }}
> Spotlight Project </button>
      </div>

      <div Classname = "JsIcon" >
      <a> <img src={"https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"} 
      className="JsIcon" />
        </a>  
          <button
          ClassName = "ButtonIcon"
   class ="  py-5  bg-indigo-500 px-5 text-lg uppercase text-white rounded-lg mt-5 hover:bg-indigo-300 transform "
    onClick={(e) => {
      e.preventDefault();
      window.open("https://github.com/ha36ad/SpotlightProject", "_blank");
      }}
> Physics JS </button>
      </div>
      
      <div Classname = "" >
      <a> <img src={"https://www.python.org/static/community_logos/python-logo-generic.svg"} 
      className="PyIcon" />
        </a>  
      <button
          ClassName = "ButtonIcon"
   class ="  py-5  bg-indigo-500 px-10 text-lg uppercase text-white rounded-lg mt-5 hover:bg-indigo-300 transform "
    onClick={(e) => {
      e.preventDefault();
      window.open("https://github.com/ha36ad/Encryption", "_blank");
      }}
> Encryptions </button>
      </div>

      <div Classname = "" >
      <a> <img src={"https://www.python.org/static/community_logos/python-logo-generic.svg"} 
      className="PyIcon" />
        </a>        
          <button
          ClassName = "ButtonIcon"
   class ="  py-5  bg-indigo-500 px-10 text-lg uppercase text-white rounded-lg mt-5 hover:bg-indigo-300 transform "
    onClick={(e) => {
      e.preventDefault();
      window.open("https://github.com/ha36ad/SearchEnginePython", "_blank");
      }}
> Search Engine </button>
      </div>
      
    </Carousel>
  );
  