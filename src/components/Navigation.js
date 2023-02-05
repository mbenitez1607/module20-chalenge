import React, { useState } from "react";
import avatar from '../assets/avatar.jpg';

function Navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <img src={avatar} alt="Purple starfish" />
                <a className="navbar-brand" href="#">Martha Benitez</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">About me
                                <span className="visually-hidden">(current)</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Portfolio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;