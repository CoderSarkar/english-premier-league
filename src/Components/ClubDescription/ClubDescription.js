import React from 'react';
import './ClubDescription.css'

const ClubDescription = (props) => {
    const { strStadiumDescription, strDescriptionEN } = props.clubInformation;
    return (
        <div className="club-description">
            <div className="container">
                <p>{strDescriptionEN}</p>
                <p>{strStadiumDescription}</p>
            </div>
        </div>
    );
};

export default ClubDescription;