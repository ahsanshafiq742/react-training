import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {userLogin} from "../actions/index";
import '../styles/index.css';
import Header from "../components/header";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
        this.handleChange = this.handleChange.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(event) {
        this.setState({username: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    handleClick(event) {
        event.preventDefault();
        this.props.userLogin(this.state.username, this.state.password);
    }

    render() {
        if (localStorage.getItem('isLoggedIn')) {
            return <Redirect to={'/Profile'} push={true}/>;
        }
        return (
            <div>
                <Header/>
                <div className="wrapper">

                    <form className="form-signin" onSubmit={this.handleClick}>
                        <h2 className="form-signin-heading">Please login</h2>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="username"
                            value={this.state.username}
                            required={'required'}
                            onChange={this.handleChange}/>
                        <br/>

                        <input
                            type="password"
                            className="form-control"
                            name="password"
                            placeholder="password"
                            value={this.state.password}
                            required={'required'}
                            onChange={this.handlePassword}/>
                        <br/>
                        <input
                            className="btn btn-lg btn-primary btn-block"
                            type="submit" value='Login'/>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(loginStatus) {
    return loginStatus;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({userLogin}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);