import { Link } from "react-router-dom";
function BeerCard({beer}){

    return (
        <Link to={`/beers/${beer._id}`}>
            <div>
                <img src={beer.image_url} alt="beer-image" />
            </div>
            <div>
                <h3>{beer.name}</h3>
                <h5>{beer.tagline}</h5>
                <p><span>Created By: </span>{beer.contributed_by}</p>
            </div>
        </Link>
    );
}

export default BeerCard;