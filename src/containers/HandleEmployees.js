import React from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux";
import {addEmployee, fetchEmployees, removeEmployee, updateEmployee} from "../actions/index";

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class HandleEmployees extends React.Component {

    constructor(props) {
        super(props);
    }

    createCustomToolBar = props => {
        return (
            <div style={{margin: '15px'}}>
                {props.components.btnGroup}
                <div className='col-xs-8 col-sm-4 col-md-4 col-lg-2'>
                    {props.components.searchPanel}
                </div>
            </div>
        );
    }

    componentWillMount() {
        this.props.fetchEmployees(this.props.loginStatus.token);
        console.log("Employees are: ", this.props.SystemEmployees);
    }

    handleDeleteRow(row) {
        this.props.removeEmployee(row);
    }

    onAddRow(row) {
        var data = {
            name: row['name'],
            designation: row['designation'],
            status: row['status']
        };
        this.props.addEmployee(data);

    }

    handleEditCell(row) {
        var data = {
            employee_id: row['employee_id'],
            name: row['name'],
            designation: row['designation'],
            status: row['status']
        }
        this.props.updateEmployee(data);
    }


    render() {

        const cellEditProp = {
            mode: 'click',
            blurToSave: true,
            afterSaveCell: this.handleEditCell.bind(this)
        };

        const selectRow = {
            mode: 'checkbox',
            showOnlySelected: true
        };
        const options = {
            toolBar: this.createCustomToolBar,
            onDeleteRow: this.handleDeleteRow.bind(this),
            onAddRow: this.onAddRow.bind(this)
        };
        return (

            <BootstrapTable data={this.props.SystemEmployees}
                            cellEdit={cellEditProp}
                            options={options}
                            selectRow={selectRow}
                            insertRow
                            deleteRow
                            exportCSV
                            search
                            pagination
                            hover>
                <TableHeaderColumn dataField='employee_id' isKey={true} editable={false}>Employee Id</TableHeaderColumn>
                <TableHeaderColumn dataField='name'>Name</TableHeaderColumn>
                <TableHeaderColumn dataField='designation'>Designation</TableHeaderColumn>
                <TableHeaderColumn dataField='status' editable={{type: 'select', options: {values: ['true', 'false']}}}>Status</TableHeaderColumn>
            </BootstrapTable>
        );
    }
}


function mapStateToProps(state) {
    return {
        loginStatus: state.loginStatus,
        SystemEmployees: state.SystemEmployees
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchEmployees, removeEmployee, addEmployee, updateEmployee}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(HandleEmployees);