import React from 'react';
import {Route, Link} from 'react-router-dom';

const NavItem = ({path, children}) => {
    return(
        <Route path={path} exact={true} children={({match}) => (
            <li className={[(match ? "active": ""), "nav-item"].join(" ")}>
                <Link className="nav-link" to={path}>{children} </Link>
            </li>
        )}
        />
    );
};
export default NavItem;