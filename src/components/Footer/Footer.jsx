import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Footer = () => (
    <footer id="page-footer" className="bg-dark align-items-center">
        <div className="container">
            <div className="text-muted text-center">©Copyright Varga Előd 2019
                LinkedIn:
                <a href="https://www.linkedin.com/in/vargaelod/" target="_blank"><FontAwesomeIcon icon={['fab','linkedin']} color="#FFF"/></a>
                GitHub:
                <a href="https://github.com/Elod23" target="_blank"><FontAwesomeIcon icon={['fab','github-square']} color="#FFF"/></a>
            </div>
        </div>

    </footer>
);