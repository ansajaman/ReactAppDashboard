import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import Mytheme from '../utils/constants';
import { withRouter } from 'react-router-dom';
 
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        columns: [
            {
              name: 'User Name',
              selector: 'userName',
              sortable: true,
            },
            {
              name: 'Password',
              selector: 'password',
              sortable: true,
            },
            {
                name: 'Role',
                selector: 'role',
                sortable: true,
              }
          ]
    }
    this.tableData = [];
    props.listOfUsers.map((user) => {
        this.tableData.push({userName: user["userName"], password: user["password"], role: user["role"]});
    })
  }
 
  render() {
    const state = this.state;
    return (
        <DataTable
            customTheme={Mytheme}
            title="List of Users"
            columns={state.columns}
            data={this.tableData}
        />

    )
  }
}
 
export default withRouter(UserList);
