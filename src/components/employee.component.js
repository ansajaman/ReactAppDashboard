import React, { Component } from 'react';
import EmployeeList from '../templates/EmployeeList';
import { withRouter } from 'react-router-dom';

class Employee extends Component {
    constructor(props) {
        super(props);  
        this.props = props;  
    }

    componentDidMount () {
        if(this.props) {
            const {getEmployeeList} = this.props;
            getEmployeeList();
        }
    }

    render () {
        return (
            (this.props && this.props.listOfEmployees) ? <EmployeeList listOfEmployees={this.props.listOfEmployees} /> : null
        );
    };
}

export default withRouter(Employee);