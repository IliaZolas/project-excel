import './nav.scss'
import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
        <div className="navbar">
            <div className="navitems">
                <div className="nav-item">
                    <Link to="/income-statement" className="item">
                        Income Statement
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to="/income" className="item">
                        Income
                    </Link>
                </div>
                <div className="nav-item nav-cta">
                    <Link to="/expenses" className="item">
                        Expenses
                    </Link>
                </div>
                <div className="liabilities">
                    <Link to="/liabilities" className="item">
                        Liabilities
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to="/assets" className="item">
                        Assets
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to="/intellectual-property" className="item">
                        Intellectual Property
                    </Link>
                </div>
                <div className="nav-item nav-cta">
                    <Link to="/passive-income" className="item">
                        Passive Income
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to="/transactions" className="item">
                        Transactions
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to="/savings" className="item">
                        Savings
                    </Link>
                </div>
                <div className="nav-item">
                    <Link to="/recon" className="item">
                        Recon
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
