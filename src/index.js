import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers'
import './styles/index.css';
import Login from './containers/Login';
import Register from './containers/Register';
import Profile from './components/Profile'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import registerServiceWorker from './components/registerServiceWorker';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router>
            <div>
                <Switch>
                    <Route exact path='/' component={Login}/>
                    <Route exact path='/Register' component={Register}/>
                    <Route exact path='/Profile' component={Profile}/>
                </Switch>
            </div>
        </Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
