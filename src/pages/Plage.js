import React, { useState, useEffect } from 'react'
import ContainerImage from '../components/ContainerImage';
import plage from "../data/Plage";

const Bouffe = () => {
    const [image, setImage] = useState(plage)
    return (
        <>
            <div className="container_image">
                <ContainerImage image={image}/>
            </div>
        </>
    )
}

export default Bouffe
