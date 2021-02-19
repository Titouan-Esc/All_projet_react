const Person = ({combattant}) => {
    return (
        <>
        {combattant.map((homme) => {
            const {id, name, photo, job} = homme;
            return(
                <div key={id}>
                    <h2>{name}</h2>
                    <img src={photo} alt=""/>
                    <p>{job}</p>
                </div>
            )
        })};
            
        </>
    );
};

export default Person
