const Person = ({combattant}) => {
    return (
        <div className="container_perso">
        {combattant.map((homme) => {
            const {id, name, photo, job} = homme;
            return(
                <div className="container" key={id}>
                    <img src={photo} alt=""/>
                    <h2>{name}</h2>
                    <p>{job}</p>
                </div>
            )
        })};
            
        </div>
    );
};

export default Person
