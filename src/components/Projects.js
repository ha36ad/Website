import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import  Carousel from './Carousel';

export default function Project() {
  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{
       background: '#1F2833',
      }}
      id="mywork"
    >
     <Carousel />     
        </div> 
  );
}
