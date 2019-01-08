// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';
// Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;
    return(
        <View style={viewStyle}>
            <Text style={ textStyle }>{props.title}</Text>
        </View>
    ); 
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: 'red',
        shadowOffset: { width: 20, height: 60},
        shadowOpecity: 0.2,
    },
    textStyle: {
        fontSize: 20
    }
}

// Make the component avaialble to other parts ot the app
export default Header;