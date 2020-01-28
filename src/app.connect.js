import DashboardComponent from "./components/dashboard.component";
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom'
import API from './apis/API';

const mapStateToProps = (state) => {
    return {
      listOfUsers: state.application.users,
      listOfEmployees: state.application.employees,
      isLoggedIn: state.application.userDetails && state.application.userDetails.loggedIn,
      userDetails: state.application.userDetails,
      errorCode: state.application.error
    }
  }
const mapDispatchToProps = (dispatch) => {
    return {
      logout: () => {
          dispatch({type: 'CLEAR'});
      },
      getUserList: () => {
        API.get('/getUsers', {
            data: {}
        }).then(reponse => {
            dispatch(
                { type: 'GET_USERS', payload: reponse.data });
        });
      },
      createUser: (data) => {
        API.post('/createUser',
          data
      ).then(response => {
          dispatch(
              { type: 'CREATE_USER', payload: {userName: data.userName,
              password: data.password,
              createSuccess: true }});
      }).catch((error) => {
        dispatch({ type: 'ERROR', payload: error.response.status});
      });
      },
      getEmployeeList: () => {
        API.get('/employees', {
            data: {}
        }).then((reponse = {}) => {
            dispatch(
                { type: 'GET_EMPLOYEES', payload: reponse.data });
        });
      },
      login: (data) => {
        API.post('/login',
            data
        ).then(reponse => {
          console.log(reponse);
            dispatch(
                { type: 'LOGIN', payload: {
                    userName: data.userName,
                    password: data.password,
                    loggedIn: true
                } });
        }).catch((error) => {
            dispatch({ type: 'ERROR', payload: error.response.status});
        });
      }
    }
}
const Dashboard = withRouter(connect(mapStateToProps, mapDispatchToProps)(DashboardComponent));

export default Dashboard;