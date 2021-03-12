import React, { useEffect, useState } from 'react';
import './ClubDetails.css'
import { useParams } from 'react-router';
import ClubBanner from '../ClubBanner/ClubBanner';
import ClubDescription from '../ClubDescription/ClubDescription';
import DetailsInformation from '../DetailsInformation/DetailsInformation';
import SocialMediaInfo from '../SocialMediaInfo/SocialMediaInfo';


const ClubDetails = () => {

    const { clubId } = useParams();
    const [clubInformation, setClubInformation ] = useState({});

    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${clubId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setClubInformation(data.teams[0]))
    }, [clubId])
   

    return (
        <div className="details-container">
            <ClubBanner clubInformation={clubInformation} ></ClubBanner>
            <div className="details-info">
                <DetailsInformation clubInformation={clubInformation}></DetailsInformation>
            </div>
            <ClubDescription clubInformation={clubInformation}></ClubDescription>
            <SocialMediaInfo clubInformation={clubInformation}></SocialMediaInfo>

        </div>
    );
};

export default ClubDetails;