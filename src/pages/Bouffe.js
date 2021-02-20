import React, { useState, useEffect } from 'react'
import ContainerImage from '../components/ContainerImage';
import bouffe from "../data/Bouffe";

const Bouffe = () => {
    const [image, setImage] = useState(bouffe)
    return (
        <>
            <div className="container_image">
                <ContainerImage image={image}/>
            </div>
        </>
    )
}

export default Bouffe
