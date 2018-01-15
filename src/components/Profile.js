import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {Redirect} from 'react-router-dom';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';
import '../styles/index.css';
import Login from '../containers/Login';
import HandleEmployees from '../containers/HandleEmployees'


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedOut: false,
        }
        this.signOut = this.signOut.bind(this);
    }

    signOut(event) {
        localStorage.clear();
        this.setState({isLoggedOut: true});
    }

    render() {

        if (!localStorage.getItem('isLoggedIn')) {
            return <Redirect to={'/'} push={true}/>;
        }

        return (

            <div>
                <MuiThemeProvider>
                    <AppBar
                        title={localStorage.getItem('username')}
                        iconElementRight={<IconMenu
                            iconButtonElement={
                                <IconButton><MoreVertIcon/></IconButton>
                            }
                            targetOrigin={{horizontal: 'right', vertical: 'top'}}
                            anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                        >
                            <MenuItem primaryText="Sign out" onClick={this.signOut}/>
                        </IconMenu>}
                        showMenuIconButton={false}
                    />
                </MuiThemeProvider>
                <br/>
                <div className={'tableMargin'}>
                    <HandleEmployees/>
                </div>
                <br/>
            </div>
        );
    }
}

export default Profile;