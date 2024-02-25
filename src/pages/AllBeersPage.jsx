import axios from "axios";
import BeerCard from "../components/BeerCard";
import { useEffect, useState } from "react";
function AllBeersPage() {
    
    const [beers, setBeers] = useState([]);

    useEffect(() =>{
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
        .then(resp => setBeers(resp.data))
        .catch(err => console.log(err));
    }, []);
    
    return(
        <div>
            {
                beers.map(beer=> {
                    return (
                        <BeerCard key={beer._id} beer={beer}/>
                    )
                })
            }
        </div>
    )
}

export default AllBeersPage;
