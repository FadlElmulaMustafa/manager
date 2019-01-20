//import liraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';
import {onNameTextChanged, onPhoneTextChanged, onShiftPickerChanged, employeeSave} from '../actions';


// create a component
class EmployeeEdit extends Component {
    componentWillMount() {
        const data = this.props.employee;

        this.props.onNameTextChanged(data.name);
        this.props.onPhoneTextChanged(data.phone);
        this.props.onShiftPickerChanged(data.shift);
    }

    onButtonPress(){
        const { name, phone, shift } = this.props;
        
        this.props.employeeSave({ name, phone, shift, uid:this.props.employee.uid});
    }
    render() {
        return (
            <Card>
                <EmployeeForm {...this.props}/>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const { name, phone, shift } = state.emp;
    return { name, phone, shift };
}

export default connect(mapStateToProps, {
    onNameTextChanged,
    onPhoneTextChanged,
    onShiftPickerChanged,
    employeeSave
})(EmployeeEdit);
