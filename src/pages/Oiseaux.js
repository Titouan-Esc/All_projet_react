import React, { useState, useEffect } from 'react'
import ContainerImage from '../components/ContainerImage';
import oiseaux from "../data/Oiseaux";

const Bouffe = () => {
    const [image, setImage] = useState(oiseaux)
    return (
        <>
            <div className="container_image">
                <ContainerImage image={image}/>
            </div>
        </>
    )
}

export default Bouffe
