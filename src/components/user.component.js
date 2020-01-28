import React, { Component } from 'react';
import UserList from '../templates/UserList';
import { withRouter } from 'react-router-dom';

class User extends Component {
    constructor(props) {
        super(props);    
        this.props = props;        
    }

    componentDidMount () {
        if(this.props) {
            const {getUserList} = this.props;
            getUserList();
        }
    }

    render () {
        let users = [];
        if(this.props && this.props.location) {
            users = this.props.location.state.listOfUsers;
        }
        return (
            this.props && this.props.listOfUsers ? <UserList listOfUsers={users} /> : null
        );
    };
}

export default withRouter(User);
