const ContainerImage = ({image}) => {
    return (
        <>
            {image.map((fond) => {
                const {id, image} = fond;
                return (
                    <div key={id}>
                        <img src={image} alt="Image"/>
                    </div>
                )
            })}
        </>
    )
}

export default ContainerImage
