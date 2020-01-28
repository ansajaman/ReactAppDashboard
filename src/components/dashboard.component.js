import React, { Component } from 'react';
import DashboardComponent from '../templates/dashboard'
import { withRouter } from 'react-router-dom';

export default withRouter(class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render () {
        return (
            <div>
                <DashboardComponent {...this.props}/>
            </div>
        );
    };
});