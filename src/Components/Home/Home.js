import React, { useEffect, useState } from 'react';
import './Home.css'
import Banner from '../Banner/Banner';
import ClubInformation from '../ClubInformation/ClubInformation';

const Home = () => {

    const [clubName, setClubName] = useState([]);
    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => setClubName(data.teams))
    }, [])

    return (
        <div className="mainBody">
            <Banner></Banner>
            <div className="home-css">
                {
                    clubName.map(clubName => <ClubInformation clubName={clubName} ></ClubInformation> )
                } 
            </div>
        </div>
    );
};

export default Home;