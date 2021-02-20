const Person = ({combattant}) => {
    
    return (
        <div className="container_perso">
            <article>
                <h1>La dream team de Fairy tail</h1>
                <p>Et ils sont {combattant.length}.</p>
            </article>
            <div className="person">
                {combattant.map((homme) => {
                    const {id, name, photo, job, particularitée} = homme;
                    return(
                        <div className="container" key={id}>
                            <img src={photo} alt=""/>
                            <h2>{name}</h2>
                            <p>{job}</p>
                            <p>{particularitée}</p>
                        </div>
                    )
                })};
            </div>
        </div>
    );
};

export default Person
