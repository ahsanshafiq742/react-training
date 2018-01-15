import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import {Link} from 'react-router-dom'
import '../styles/index.css';

class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <div className="form-inline">
                    <Link to={'/Register'}>
                        <button className="btn btn-success custom" type="button">SignUp</button>
                    </Link>
                    <Link to={'/'}>
                        <button className="btn btn-success custom" type="button">Login</button>
                    </Link>
                </div>
            </nav>);
    }
}

export default Header;