import React, { Component } from 'react';
import Modal from './Modal';
import 'bulma/css/bulma.css';
import { withRouter, NavLink } from 'react-router-dom';
import HeaderTile from './HeaderTile';

class Dashboard extends Component {

    constructor(props, context) {
        super(props, context);
        this.props = props;
        this.context = context;
        this.defaultState = {
            show: false,
            userName: '',
            password: '',
            role: '',
            showCreateUser: false
        };
        this.state = {
            show: false,
            userName: '',
            password: '',
            role: '',
            showCreateUser: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleRoleChange = this.handleRoleChange.bind(this);
        this.toggleCreateUser = this.toggleCreateUser.bind(this);
    }

    handleUserChange(event) {
        this.setState({ userName: event.target.value });
    }

    handlePasswordChange(event) {
        this.setState({ password: event.target.value });
    }

    handleRoleChange(event) {
        this.setState({ role: event.target.value });
    }

    toggleModal = () => {
        this.setState({
            show: !this.state.show
        });
    }

    toggleCreateUser = () => {
        this.setState({
            showCreateUser: !this.state.showCreateUser
        });
    }

    login = () => {
        const { login } = this.props;
        login({ userName: this.state.userName, password: this.state.password });
        this.setState({
            show: !this.state.show
        });
    }

    logout = () => {
        const { logout } = this.props;
        logout();
        this.setState(this.defaultState);
    }

    createUser = () => {
        const { createUser } = this.props;
        createUser({ userName: this.state.userName, password: this.state.password, role: this.state.role });
        this.setState({
            showCreateUser: !this.state.showCreateUser
        });
    }

    render() {
        const { userDetails, getUserList, listOfUsers, getEmployeeList, listOfEmployees, errorCode, createEmployee } = this.props;
        const isLoggedIn = userDetails && userDetails.loggedIn;
        const message = errorCode && 'Incorrect User Name or Password entered';
        return (
            <div>
                <br />
                <br />
                {message && <article className="message is-danger">
                    <div className="message-header" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        {message}
                    </div>
                </article>}
                {this.state.showCreateUser && <Modal show={this.state.showCreateUser} close={this.toggleCreateUser} continue={this.createUser}>
                    <div className="control">
                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-success" type="text" placeholder="Enter User Name" value={this.state.userName} onChange={this.handleUserChange} />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-success" type="text" placeholder="Enter Password" value={this.state.password} onChange={this.handlePasswordChange} />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Role</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-success" type="text" placeholder="Enter Role" value={this.state.role} onChange={this.handleRoleChange} />
                            </div>
                        </div>
                    </div></Modal>}
                {this.state.show && <Modal show={this.state.show} close={this.toggleModal} continue={this.login}>
                    <div className="control">
                        <div className="field">
                            <label className="label">Username</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-success" type="text" placeholder="Enter User Name" value={this.state.userName} onChange={this.handleUserChange} />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Password</label>
                            <div className="control has-icons-left has-icons-right">
                                <input className="input is-success" type="text" placeholder="Enter Password" value={this.state.password} onChange={this.handlePasswordChange} />
                            </div>
                        </div>
                    </div>
                </Modal>}
                {<div className="tile is-ancestor">
                    <HeaderTile />
                    <div className="tile is-parent">
                        <article className="tile is-child notification is-success">
                            <div className="content">
                                <div className="title">Dashboard<br />
                                    <p style={{ textAlign: 'right' }}>{isLoggedIn && <button className="button is-warning is-inverted" onClick={this.logout}>Logout</button>}</p></div><br />
                                <div className="subtitle">
                                    {isLoggedIn && <div>Hi {userDetails.userName}!</div>}
                                    {!isLoggedIn && <button className="button is-warning is-outlined" onClick={this.toggleModal} >
                                        Login
                                    </button>}<br /><br />
                                    {!isLoggedIn && <button className="button is-warning is-outlined" onClick={this.toggleCreateUser} >
                                        Create Account
                                    </button>}
                                    {isLoggedIn && <NavLink to={{
                                        pathname: '/users',
                                        props: {
                                            getUserList,
                                            listOfUsers
                                        },
                                        state: {
                                            listOfUsers
                                        }
                                    }} ><button className="button is-warning is-inverted">
                                            Get Users
                                    </button></NavLink>}<br /><br />
                                    {isLoggedIn && <NavLink to={{
                                        pathname: '/employees',
                                        props: {
                                            getEmployeeList,
                                            listOfEmployees
                                        },
                                        state: {
                                            listOfEmployees
                                        }
                                    }} ><button className="button is-warning is-inverted">
                                            Get Empoyees
                                    </button></NavLink>}<br /><br />
                                    {isLoggedIn && <NavLink to={{
                                        pathname: '/createEmployee',
                                        state: {
                                            createEmployee
                                        }
                                    }} ><button className="button is-warning is-inverted">
                                            Create Employee
                                    </button></NavLink>}
                                </div>
                                <div className="content">
                                </div>
                            </div>
                        </article>
                    </div>
                </div>}
            </div>
        );
    }
}

export default withRouter(Dashboard);
