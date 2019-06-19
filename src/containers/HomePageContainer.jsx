import React, {Component} from 'react';
import {MainHeader} from "components/Header/MainHeader";
import {Link} from 'react-router-dom';
import {Footer} from "components/Footer/Footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default class HomePageContainer extends Component{
    constructor(props) {
        super(props);
        this.state = {
            team : [{name : "Tencuieli Decorative", description: "Descriere produs."},
                    {name : "Pietre Ornamentale", description: "Descriere produs."},
                    {name : "Vopsele", description: "Descriere produs."},
                    {name : "Decorațiuni interioare", description: "Descriere produs."},
                    {name : "Materiale de construcții brute", description: "Descriere produs."},
                    {name : "Profile din oțel", description: "Descriere produs."}],
            news: [
                {title: "Meteor S.R.L. angajează lucrător comercial",
                    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec fringilla felis. Vestibulum consequat quam a elementum iaculis. Proin diam erat, porta eleifend lacinia ultrices."},
                {title: "Fusce faucibus feugiat faucibus?",
                    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec fringilla felis. Vestibulum consequat quam a elementum iaculis. Proin diam erat, porta eleifend lacinia ultrices."}
            ],
            partners: [
                {imageURL: require('../html_sample/img/trilak-logo.png'), name: "Trilak Coatins S.R.L.", pageURL: "http://www.trilak.ro/"},
                {imageURL: require('../html_sample/img/polifarbe-logo.jpg'), name: "Poli- Farbe RO", pageURL:"http://polifarbero.ro/"},
                {imageURL: require('../html_sample/img/adeplast-logo.png'), name: "Adeplast S.R.L.", pageURL:"https://www.adeplast.ro/"},
                {imageURL: require('../html_sample/img/kober-logo.png'), name: "Kober RO", pageURL:"http://kober.ro/en/home/"},
            ]

    }
    }

    render() {
        const productCategories = this.state.team;
        const productList = productCategories.map(category => {
            return(
                <div className="col-12 col-md-6 col-lg-4 text-center py-4" key={category.name}>
                   <FontAwesomeIcon icon={"cart-plus"}/>
                    <h5 className="text-info">{category.name}</h5>
                    <p className="text-muted">{category.description}</p>
                </div>
            )
        });

        const newsDisplayList = ((this.state.news !== null || this.state.news !== undefined || this.state.news.length > 0) ? this.state.news.map(article => {
            return (
                <li key={article.title}>
                    <div className="container">
                        <h5 className="bold">{article.title}</h5>
                        <p className="mt-1">{article.description}</p>
                    </div>
                </li>
            )
        }) : <li>
            <div className="container">
                <h5 className="bold">Momentan nu exista informatii despre firma</h5>
                <p className="mt-1">Va rugam reveniti mai tarziu</p>
            </div>
        </li>);

        const partnersList = ( (this.state.partners !== null || this.state.partners !== undefined || this.state.partners.length >0) ? this.state.partners.map(partner => {
            return (
                <div className="card" key={partner.name}>
                    <img className="card-img-top" src={partner.imageURL} width="225px" height="225px" alt={partner.name}/>
                        <div className="card-body">
                            <h4 className="card-title">{partner.name}</h4>
                            <p className="card-text"></p>
                            <a href={partner.pageURL} target="_blank"
                               className="btn btn-info stretched-link">Vizitează</a>
                        </div>
                </div>
            )}) : "");

        return(
            <div>
                <MainHeader/>
                <section id="products" className="bg-white">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3 className="section-title">Categorii de produse</h3>
                        </div>
                    </div>
                    <div className="row">
                        {productList}
                    </div>
                    <div className="row align-items-center px-lg-0 no-gutters">
                        <div className="col-12 col-lg-4 mx-auto order-lg-1 mb-3">
                            <h2>Parteneri</h2>
                            <p>Meteor S.R.L., o afacere de familie visată și găndită de la început pentru a oferi
                                sigurantă și profesionalism clienților săi comercializează numai produse testate și
                                recunoscute la nivel internațional. Partenerii noștri ne asigură despre această calitate
                                prin diferite servicii de garanție. În cazul în care constatați că produsul dvs. este
                                defect, furnizorul acestuia asigură înlocuirea acestuia iar noi despăgubirea
                                clientului.</p>
                            <p></p>
                            <button type="button" className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3 className="section-title">Partenerii noștri sunt:</h3>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="card-deck align-items-center">
                            {partnersList}
                        </div>
                    </div>
                </section>
                <section id="faq" className="bg-white">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-sm-6">
                                <h2>Știri Meteor</h2>
                                <p className="lead">Cele mai noi știri despre Meteor, produse, joburi și lucrări de
                                    referință</p>
                                <p className="text-muted">Pentru a vizualiza fiecare știre apăsați aici</p>
                                <Link to="/news"><button type="button" className="btn btn-info"> Detalii</button></Link>
                            </div>
                            <div className="col-12 col-sm-6">
                                <ul className="list list-unstyled">
                                    {newsDisplayList}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="screenshots" className="bg-light">
                    <div className="container-fluid px-lg-0 px-3">
                        <div className="row align-items-center px-lg-0 no-gutters">
                            <div className="col-12 col-lg-4 mx-auto order-lg-2 mb-3">
                                <h2>Puncte de access Meteor S.R.L.</h2>
                                <p>Momentan firma este reprezentată prin două magazine și un depozit central în Satu Mare, jud. Satu Mare, România.</p>
                                <p>Pentru o discuție cu meșterii noștri vă rugăm să ne contactați telefonic sau să ne căutați în magazinele de pe Str. Wolfenbüttel, respectiv Bv-dul Cloșca. Pentru discuții de parteneriat sau o prezentare amplă a gamei de produse ne găsiți pe Str. Aurel Vlaicu în sediul firmei.</p>
                                <button type="button" className="btn btn-primary">Contact</button>
                            </div>
                            <div className="col-12 col-lg-6 order-lg-1"> <iframe src="https://www.google.com/maps/d/embed?mid=1BStWCJSs9fSAFlW_OY3lnn4VxaWf9eQs" width="100%" height="480px"></iframe> </div>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        )
    }
}