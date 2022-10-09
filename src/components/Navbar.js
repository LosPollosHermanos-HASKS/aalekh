import '../../src/style/App.css';
import {Link } from 'react-router-dom';

export default function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Aalekh</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard/world">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">About Us</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/crypto"> Crypto </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/Stocks"> Stocks </Link>
              </li>
             
            </ul>
            
            <form className="d-flex">
              <button className="btn btn-outline-info" type="submit">Login</button>
            </form>
          </div>
        </div>
      </nav>
    );
}