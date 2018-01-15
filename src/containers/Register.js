import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {userRegistration} from "../actions/index";
import '../styles/index.css';
import Header from "../components/header";

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
        }
        this.handleUsername = this.handleUsername.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleUsername(event) {
        this.setState({username: event.target.value});
    }

    handleEmail(event) {
        this.setState({email: event.target.value});
    }

    handlePassword(event) {
        this.setState({password: event.target.value});
    }

    handleClick(event) {
        event.preventDefault();
        this.props.userRegistration(this.state.username, this.state.email, this.state.password);
    }

    render() {
        if (this.props.RegistrationStatus.status) {
            return <h2>Registration successful.Please <a href={'/'}>login</a> to continue.</h2>
        }
        return (
            <div>
                <Header/>

                <div className="wrapper">

                    <form className="form-signin" onSubmit={this.handleClick}>
                        <h2 className="form-signin-heading">User Registration</h2>
                        <input
                            type="text"
                            className="form-control"
                            name="username"
                            placeholder="username"
                            value={this.state.username}
                            required={'required'}
                            onChange={this.handleUsername}/>
                        <br/>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="email"
                            value={this.state.email}
                            required={'required'}
                            onChange={this.handleEmail}/>
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
                            type="submit" value='SignUp'/>
                    </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(RegistrationStatus) {
    return RegistrationStatus;
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({userRegistration}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);