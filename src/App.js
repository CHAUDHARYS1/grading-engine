// Root component that holds the main structure of your React app.
import React from 'react';
//Import Route and Switch from react-router-dom
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login/login.js';
import Dashboard from './components/Dashboard';
import Grade from './components/Grade';
import Attendance from './components/Attendance';


// create App function 
function App () {
    return (
        // wrap Switch with a div tag
        <div>
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/grade' component={Grade} />
            <Route path='/attendance' component={Attendance} />
            {/* Add more routes here as needed */}
        </Switch>
        </div>
    );
}

export default App;
