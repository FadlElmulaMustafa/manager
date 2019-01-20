//import liraries
import React, { Component } from 'react';
import { View, Text, Picker } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Input } from './common';
import { onNameTextChanged, onPhoneTextChanged, onShiftPickerChanged} from '../actions';

// create a component
class EmployeeForm extends Component {

    onNameTextChange(text){
        this.props.onNameTextChanged(text);
    }
    onPhoneTextChange(text) {
        this.props.onPhoneTextChanged(text);
    }
    onShiftPickerChange(text) {
        this.props.onShiftPickerChanged(text);
    }
    render() {
        return (
            <View >
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
                  <Text style={styles.PickerTextStyle}>Shift</Text>
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
            </View>
        );
    }
}

const styles = {
    PickerTextStyle: {
        flex:2,
        fontSize: 18,
        paddingLeft:20
    }
};

const mapStateToProps = state => {
    const { name, phone, shift } = state.emp;
    return { name, phone, shift }
}

export default connect(mapStateToProps, {
    onNameTextChanged,
    onPhoneTextChanged,
    onShiftPickerChanged
})(EmployeeForm); 

