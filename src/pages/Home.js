import data from '../data';
import React, { useState } from 'react'
import Person from '../components/Person.jsx';


const Home = () => {
    const [combattant, setCombattant] = useState(data);
    return (
        <>
        <Person combattant={combattant}>
        </Person>
            <button onClick={() => setCombattant([])}>Enleve la team</button>
        </>
    );
};

export default Home
