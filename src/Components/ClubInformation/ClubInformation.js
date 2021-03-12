import React from 'react';
import './ClubInformation.css'
import { Link } from 'react-router-dom';


const ClubInformation = (props) => {
    const {strTeam, strSport,strTeamBadge,idTeam} = props.clubName;
    return (
        <div className="col-md-4 col-sm-12 club-information" >
            <div className="club-container">
                <img src={strTeamBadge} alt=""/>
                    <h4>{strTeam}</h4>
                    <p>Sports Type: {strSport} </p>
                    <Link to={`/clubInfo/${idTeam}`}>
                        <button>Explore</button>
                    </Link>
            </div>
        </div>
    );
};

export default ClubInformation;