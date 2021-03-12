import React from 'react';
import './Banner.css'
import image from './banner.jpg'

 const bannerStyle = {
    backgroundImage: `url(${image})`,
    height: '250px',
    backgroundSize: "cover",
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
 }

const Banner = () => {
    return (
        <div  style={bannerStyle}>
            <div className="banner">
                <h1 className="text-center caption">English Premier League Club</h1>
            </div>
        </div>
    );
};

export default Banner;