import React from 'react';

const myPic = '../../../images/paros.jpg'

const videoUrl = "https://www.youtube.com/embed/WwSYT-4KwpI?controls=0&showinfo=0&rel=0&autoplay=1&loop=1"

export default () => {
  return <div>
    PRACTICAL INFO....
    <div className='our-names'> Despo & Bruno </div>
    <div className='wed-date'> June 10, 2016 </div>
    <div className='wed-place'> Paros, Greece </div>
    <img src={myPic} style={{width: '50vw'}}/>

  </div>;
};
