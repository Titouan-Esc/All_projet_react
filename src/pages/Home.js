import data from '../data';
import React, { useState } from 'react'
import Person from '../components/Person.jsx';


const Home = () => {
    const [combattant, setCombattant] = useState(data);
    return (
        <>
        <Person combattant={combattant}/>
        </>
    );
};

export default Home
