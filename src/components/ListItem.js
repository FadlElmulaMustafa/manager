//import liraries
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { CardSection } from './common';

// create a component
class ListItem extends Component {
   
    render() {
        const { name } = this.props.employee;
        return (
            <CardSection >
                <Text style={styles.titleStyle}>
                    {name}
                </Text>
            </CardSection>
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 18,
        paddingLeft: 15
    }
});

//make this component available to the app
export default ListItem;
