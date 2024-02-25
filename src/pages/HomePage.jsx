import { Link } from "react-router-dom";
import beersImg from './../assets/beers.png'
import randomBeerImg from './../assets/random-beer.png'
import newBeerImg from './../assets/new-beer.png'
function HomePage() {
    return (
        <div>
            <Link to="/beers">
                <img src={beersImg} alt="beers-image" />
                <h2 style={{color:'black', marginLeft:'20px'}}>All Beers</h2>
            </Link>
            <p style={{marginLeft:'20px', marginRight:'60vw', textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <Link to="/random-beer">
                <img src={randomBeerImg} alt="beers-image" />
                <h2 style={{color:'black',  marginLeft:'20px'}}>Random Beer</h2>
            </Link>
            <p  style={{marginLeft:'20px', marginRight:'60vw', textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

            <Link to="/new-beer">
                <img src={newBeerImg} alt="beers-image" />
                <h2 style={{color:'black',  marginLeft:'20px'}}>New Beer</h2>
            </Link>
            <p  style={{marginLeft:'20px', marginRight:'60vw', textAlign:'justify'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>

        </div>
    )
}

export default HomePage;
