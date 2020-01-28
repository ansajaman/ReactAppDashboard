
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Dashboard from './app.connect';
import Employee from './components/employee.component';
import User from './components/user.component';

const routes = (
  <div>
    <Switch>
      <Route exact path="/" render={props => <Dashboard {...props} />} />
      <Route path="/employees" render={props => <Employee getEmployeeList={props.location.props.getEmployeeList}
        listOfEmployees={props.location.props.listOfEmployees} />} />
      <Route path="/users" render={props => <User listOfUsers={props.location.props.listOfUsers} getUserList={props.location.props.getUserList} />} />
    </Switch>
  </div>
)

export default routes;
