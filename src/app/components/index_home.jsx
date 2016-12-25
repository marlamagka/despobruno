import React from 'react';

const videoUrl = "https://www.youtube.com/embed/WwSYT-4KwpI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1"

export default () => {
  return <div>
    <div className='our-names'> Bruno & Despo </div>
    <div className='wed-date'> June 10, 2016 </div>
    <div className='wed-place'> Paros, Greece </div>

    <div className="video-background">
      <div className="video-blur"/>
      <div className="video-foreground">
        <iframe src={videoUrl} frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
  </div>;
};
