import { Link } from "react-router-dom";
import homeIcon from './../assets/home-icon.png';
function Navbar() {
    return (
        <Link  to={"/"}>
          <nav style={{backgroundColor:'rgb(135, 206, 330)'}}>
            <img style={{padding:'10px 50vw'}} src={homeIcon} alt="home-icon" />
          </nav>
        </Link>
    );
}

export default Navbar;
