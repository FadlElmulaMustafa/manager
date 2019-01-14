import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from './common';
import { onNameTextChanged, onPhoneTextChanged, onShiftPickerChanged, createUserEmployee} from '../actions/EmployeeActions';

class EmployeeCreate extends Component {

    onNameTextChange(text){
        this.props.onNameTextChanged(text);
    }
    onPhoneTextChange(text) {
        this.props.onPhoneTextChanged(text);
    }
    onShiftPickerChange(text) {
        this.props.onShiftPickerChanged(text);
    }
    onButtonPress() {
        const { name, phone, shift } = this.props;
        this.props.createUserEmployee({ name, phone, shift: shift || 'Monday' });
    }
    render(){
        return (
          <Card>
              <CardSection>
                <Input
                    label="Name"
                    placeholder="Jane"
                    value={this.props.name}
                    onChangeText={this.onNameTextChange.bind(this)}
                />  
              </CardSection>
              <CardSection>
                <Input
                    label="Phone"
                    placeholder="555-555-555"
                    value={this.props.phone}
                    onChangeText={this.onPhoneTextChange.bind(this)}
                />  
              </CardSection>
              <CardSection>
                  <Text>Shift</Text>
                  <Picker 
                    style={{flex: 1}}
                    selectedValue={this.props.shift}
                    onValueChange= {this.onShiftPickerChange.bind(this)}
                  >
                    <Picker.Item label="Monday" value="Monday"/>
                    <Picker.Item label="Tuesday" value="Tuesday"/>
                    <Picker.Item label="Wednesday" value="Wednesday"/>
                    <Picker.Item label="Thursday" value="Tursday"/>
                    <Picker.Item label="Friday"  value="Friday"/>
                  </Picker>
              </CardSection>
              <CardSection>
                  <Button onPress={this.onButtonPress.bind(this)}>
                      Create
                  </Button>
              </CardSection>
          </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        name: state.emp.name,
        phone: state.emp.phone,
        shift: state.emp.shift
    }
}

export default connect(mapStateToProps, {
    onNameTextChanged,
    onPhoneTextChanged,
    onShiftPickerChanged,
    createUserEmployee
})(EmployeeCreate);