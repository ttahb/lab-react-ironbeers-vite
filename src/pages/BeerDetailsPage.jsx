import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BeerDetailsCard from "../components/BeerDetailsCard";

function BeerDetailsPage() {
    const [beer, setBeer] = useState(null);
    const {beerId} = useParams();

    useEffect(()=>{
        console.log(`beerId - ${beerId}`);

        axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
        .then(resp=>setBeer(resp.data))
        .catch(err=>console.log(err));

    }, [beerId])

    return (
       <div>
        {!beer && <h3>Loading beer ...</h3>}
        {beer && (<BeerDetailsCard beer={beer}/>)}
       </div>
    );
}

export default BeerDetailsPage;
