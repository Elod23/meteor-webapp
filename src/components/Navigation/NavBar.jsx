import React from 'react';
import NavItem from "./NavItem";

const NavBar = () => (
    <nav className="navbar navbar-light bg-light navbar-expand-lg fixed-top" >
        <div className="container">
            <a className="navbar-brand" href="/">
                <img src={require("./images/MeteorlogoHU.jpg")} width="150px" height="80px" alt="Meteor Logo"/>
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Inchide navigatia">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <NavItem path="/">Pagina Principala</NavItem>
                    <NavItem path="/produse">Produse și sisteme</NavItem>
                    <NavItem path="/news">Noutati</NavItem>
                    <NavItem path="/parteneri">Parteneri</NavItem>
                    <NavItem path="/contact">Contact</NavItem>
                </ul>
            </div>
        </div>
    </nav>
);

export default NavBar;