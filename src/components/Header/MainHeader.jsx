import React from 'react';
import {Link} from 'react-router-dom';

export const MainHeader = () => {
  return(
      <header id="page-header" className="pb-md-5 pb-5 pb-lg-0">
        <div className="container">
            <div className="row">
                <div id="header-text" className="order-2 order-sm-2 order-md-1 col-12 col-sm-12 col-md-7 col-lg-6">
                    <h1 className="display-4"> Pentru casa ta, cu drag</h1>
                    <p className="lead">Echipa noastră este disponibilă zilnic pentru ca tu să-ți construiești casa de vis, la un preț decent.</p>
                    <Link to="/echipa"><button type="button" className="btn btn-light">Despre noi</button></Link>
                </div>
                <div id="header-img" className="order-2 order-sm-2 order-md-2 col-12 col-sm-12 col-md-6 col-lg-6">
                    <img className="img-fluid" src={require("./images/1.jpg")} width="100%" height="100%" alt="Echipa Meteor"/>
                </div>
            </div>
        </div>
      </header>
  )
};