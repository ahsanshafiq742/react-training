import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'
import '../styles/index.css';

class ProfileHeader extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-primary">
                <div className="form-inline">
                    <h1>{localStorage.getItem('username')}</h1>
                    <button className="btn btn-success pos" type="button">Logout</button>
                </div>
            </nav>);
    }
}

export default ProfileHeader;