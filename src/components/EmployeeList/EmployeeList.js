import React from 'react';
import {connect} from 'react-redux';
import {selectEmployee} from "../../actions";

const EmployeeList = (props) => {
    const renderEmployeeList = props.employees.map((employee) => {
        return (
            <div className="item" key={employee.id}>
                <div className="right floated content">
                    <button onClick={()=> props.selectEmployee(employee)}
                            className="ui right labeled icon button ">
                        <i className="right arrow icon"></i>
                        Preview
                    </button>
                </div>
                <div className="content">{employee.name}</div>
            </div>
        )
    });
    return (
        <div className={"ui relaxed divided list"}>
            {renderEmployeeList}
        </div>
    )
};

const mapStateToProps = (state) => {
     return {employees: state.employees}
};

export default connect (mapStateToProps, {selectEmployee}) (EmployeeList);
