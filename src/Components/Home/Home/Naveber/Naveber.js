import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../images/preview.jpg'

const Naveber = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">
                        <img className="w-25 ms-5" src={logo} alt=""/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link class="nav-link p-4 active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link p-4" to="/about us">About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link p-4" to="/projects">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link p-4" to="/contact">Contact</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link p-4" to="/admin">Admin</Link>
                            </li>
                            <li class="nav-item">
                           <Link to="/login"> <button type="button" class="btn btn-success ms-5 mt-3">Login</button></Link>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Naveber;