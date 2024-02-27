function BeerDetailsCard({beer}){

    return (
        <div>
            <img src={beer.image_url} alt="beer-image"/>
            <h2>{beer.name}</h2>
            <h3>{beer.tagline}</h3>
            <span>{beer.first_brewed} </span>
            <span>{beer.attenuation_level}</span>
            <p>{beer.description}</p>
            <h6>{beer.contributed_by}</h6>
        </div>
    );
}

export default BeerDetailsCard;