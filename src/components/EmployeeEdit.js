//import liraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, Confirm } from './common';
import EmployeeForm from './EmployeeForm';
import {
    onNameTextChanged, 
    onPhoneTextChanged, 
    onShiftPickerChanged, 
    employeeSave, 
    employeeDelete,
    emptyState
} from '../actions';


// create a component
class EmployeeEdit extends Component {

    constructor() {
        super();
        this.state = { 
            showModal: false 
        };
    }

    componentWillMount() {
        const data = this.props.employee;

        this.props.onNameTextChanged(data.name);
        this.props.onPhoneTextChanged(data.phone);
        this.props.onShiftPickerChanged(data.shift);
    }

    componentWillUnmount(){
        this.props.emptyState();
    }

    onButtonPress(){
        const { name, phone, shift } = this.props;
        
        this.props.employeeSave({ name, phone, shift, uid:this.props.employee.uid});
    }
    
    onTextPress() {
        const {phone, shift } = this.props;
        Communications.text(phone,`Your upcomming shift is on ${shift}`);
    }
    onAccept() {
       this.props.employeeDelete({ uid: this.props.employee.uid });
    }
    onDecline(){
        this.setState({ showModal: false });
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

                <CardSection>
                    <Button onPress={this.onTextPress.bind(this)}>
                        Text Schedule
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={ () => this.setState({ showModal: !this.state.showModal })}>
                        Fire Employee
                    </Button>
                </CardSection>

                <Confirm
                    visible={ this.state.showModal }
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are you sure you want to delete this ? 
                </Confirm>
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
    employeeSave,
    employeeDelete,
    emptyState

})(EmployeeEdit);
