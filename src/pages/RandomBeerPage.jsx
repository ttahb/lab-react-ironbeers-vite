import { useEffect, useState } from "react";
import BeerDetailsCard from "../components/BeerDetailsCard";
import axios from "axios";

function RandomBeersPage() {

    const [beer, setBeer] = useState(null);
    
    useEffect(()=> {
        axios.get('https://ih-beers-api2.herokuapp.com/beers/random')
        .then(res => setBeer(res.data))
        .catch(err=> console.log(err));
    }, []);
  
    return (
        <>
            {!beer && (<h1>Loading...</h1>)}
            {beer && <BeerDetailsCard beer={beer}/>}
        </>
    )
}

export default RandomBeersPage;
