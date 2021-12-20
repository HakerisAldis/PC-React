import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Aldas Pakėnas</h1>
            <div className="links">
                <Link className="header-btn btn btn-primary" to="/">Sąrašas</Link>
                <Link className="header-btn btn btn-primary" to="/newrecordform">Pridėti</Link>
            </div>
        </nav>
    );
}

export default Navbar;