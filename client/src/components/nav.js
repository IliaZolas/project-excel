import './nav.scss'
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="navitems">
                <div className="nav-item">
                    <a href="/#">Login</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
