import React from 'react';
import './ClubBanner.css'

const ClubBanner = (props) => {

    const { strTeamBanner, strTeamBadge } =props.clubInformation;

    const clubBanner = {
        backgroundImage: `url(${strTeamBanner})`,
        height: '250px',
        backgroundSize: "cover",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
    }
    return (
        <div style={clubBanner}>
            <div>
                <img className="image" src={strTeamBadge} alt="" />
            </div>
        </div>
    );
};

export default ClubBanner;