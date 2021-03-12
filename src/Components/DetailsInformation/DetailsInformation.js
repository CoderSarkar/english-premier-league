import React from 'react';
import './DetailsInformation.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt,faFlag,faFutbol,faMars } from '@fortawesome/free-solid-svg-icons'
import maleImage from './image/male.png'
import femaleImage from './image/female.png'

const DetailsInformation = (props) => {
    const {strTeam,intFormedYear,strCountry,strSport,strGender } = props.clubInformation;

    let genderImage;
    if(strGender === 'Male'){
        genderImage = <img src={maleImage} alt=""/>
    }else{
        genderImage = <img src={femaleImage} alt=""/>
        
    }



    return (
        <div className="container club-details">
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <h2>{strTeam}</h2>
                    <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Founded: {intFormedYear} </p>
                    <p><FontAwesomeIcon icon={faFlag} /> Country: {strCountry} </p>
                    <p><FontAwesomeIcon icon={faFutbol} /> Sports Type: {strSport} </p>
                    <p><FontAwesomeIcon icon={faMars} /> Gender: {strGender} </p>
                </div>
                <div className="col-md-1 col-sm-12"></div>
                <div className="col-md-5 col-sm-12">
                   {genderImage}
                </div>
            </div>
        </div>
    );
};

export default DetailsInformation;