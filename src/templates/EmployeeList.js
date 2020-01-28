import React, { Component } from 'react';
import DataTable from 'react-data-table-component';
import Mytheme from '../utils/constants';
import { withRouter } from 'react-router-dom';

 
class EmployeeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
        columns: [
            {
              name: 'Id',
              selector: 'id',
              sortable: true,
            },
            {
              name: 'First Name',
              selector: 'firstName',
              sortable: true,
            },
            {
                name: 'Last Name',
                selector: 'lastName',
                sortable: true,
              },
              {
                name: 'Email Address',
                selector: 'email',
                sortable: true,
              },
              {
                name: 'Skillsets',
                selector: 'skillSets',
                sortable: true,
              }
          ]
    }
    this.tableData = [];
    props.listOfEmployees.map((employee) => {
        this.tableData.push({id: employee["id"], firstName: employee["firstName"], lastName: employee["lastName"], email: employee["email"], skillSets: employee["skillSets"].join(', ')});
    })
  }
 
  render() {
    const state = this.state;
    return (
        <DataTable
            customTheme={Mytheme}
            title="List of Employees"
            columns={state.columns}
            data={this.tableData}
        />

    )
  }
}
 
export default withRouter(EmployeeList);