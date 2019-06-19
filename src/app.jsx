import React from 'react';
import NavBar from './components/Navigation/NavBar';
import {render} from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import HomePageContainer from "./containers/HomePageContainer";
import TeamPage from "./pages/TeamPage";
import Route from "react-router-dom/es/Route";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faCartPlus } from "@fortawesome/free-solid-svg-icons/faCartPlus";

library.add(fab, faCartPlus);

const App = () => {

    return (<Router>
                <NavBar/>
                <Route path="/" exact component={HomePageContainer} />
                <Route path="/echipa" component={TeamPage}/>
        </Router>
    );
};

render(<App/>, document.getElementById("app"));