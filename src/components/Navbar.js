import React from 'react'
// import { useEffect } from 'react';
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = (props) => {
    let location = useLocation();
    const navigate = useNavigate();

    // useEffect(() => {
    //     console.log(location.pathname);
    // }, [location]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        props.showAlert("Logged out successfully!", "success");
        navigate('/login');
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">iNotebook</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/home' ? 'active' : ''}`} aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success me-4" type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </form>
                        {!(localStorage.getItem('token')) ? <div className='d-flex'>
                            <div className="d-flex me-2">
                                <Link className="btn btn-success" to="/signup" role="button">Sign-up</Link>
                            </div>
                            <div className="d-flex me-2">
                                <Link className="btn btn-primary" to="/login" role="button">Login</Link>
                            </div>
                        </div> : <button className='btn btn-primary' onClick={handleLogout}>Logout</button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
