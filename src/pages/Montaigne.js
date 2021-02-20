import React, { useState, useEffect } from 'react'
import ContainerImage from '../components/ContainerImage';
import montagne from "../data/Montaigne";

const Bouffe = () => {
    const [image, setImage] = useState(montagne)
    return (
        <>
            <div className="container_image">
                <ContainerImage image={image}/>
            </div>
        </>
    )
}

export default Bouffe
