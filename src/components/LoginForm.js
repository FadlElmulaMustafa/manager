//import liraries
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Card, CardSection, Input, Button, Spinner } from './common';

// create a component
class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        const { email, password } = this.props;

        this.props.loginUser({ email, password });
    }
    renderError(){
        if(this.props.error){
            return (
                <View style={{backgroundColor: 'white'}}>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </View>
            );
        }
    }

    renderButton(){
        return this.props.loading ?<Spinner size={"large"}/>:<Button onPress={this.onButtonPress.bind(this)}>Login</Button>;
    }
    render() {
        return (
           <Card>
               <CardSection>
                    <Input
                        label="Email"
                        placeholder="me@gmail.com"
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
               </CardSection>

               <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="******"
                        onChangeText={this.onPasswordChange.bind(this)}
                        value={this.props.password}
                    />
               </CardSection>
                {this.renderError()}
               <CardSection>
                   {this.renderButton()}
               </CardSection>
           </Card>
        );
    }
} 

const styles = {
    errorTextStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'red'
    }
}

const mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
};

//make this component available to the app
export default connect(mapStateToProps,{
    emailChanged, passwordChanged, loginUser
})(LoginForm);
