import data from '../data';
import React, { useState } from 'react'
import Person from '../components/Person.jsx';
import BodyHome from '../components/BodyHome';


const Home = () => {
    const [combattant, setCombattant] = useState(data);
    return (
        <>
        <Person combattant={combattant} />
        <BodyHome/>
        </>
    );
};

export default Home
