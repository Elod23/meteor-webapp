import React from 'react';
import NavBar from './components/Navigation/NavBar';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {MainHeader} from './components/Header/MainHeader';
import HomePageContainer from "./containers/HomePageContainer";
import {TeamPage} from "./pages/TeamPage";
import Route from "react-router-dom/es/Route";

const App = () => {
    const list = [{name : "Tencuieli Decorative", description: "Descriere produs."},
        {name : "Pietre Ornamentale", description: "Descriere produs."},
        {name : "Vopsele", description: "Descriere produs."},
        {name : "Decorațiuni interioare", description: "Descriere produs."},
        {name : "Materiale de construcții brute", description: "Descriere produs."},
        {name : "Profile din oțel", description: "Descriere produs."}];

    return (<Router>
                <NavBar/>
                <MainHeader/>
                <HomePageContainer productCategories={list}/>
                <Route exact path="/echipa" component={TeamPage}/>
        </Router>
    );
};

render(<App/>, document.getElementById("app"));