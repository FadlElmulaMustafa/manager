import React from 'React';
import { View, TextInput, Text } from 'react-native';

const Input = ({ label, value , onChangeText, placeholder, secureTextEntry }) => {
    const {container, lableStyle, inputStyle } = styles;
    return (
        <View style={container}>
            <Text style={lableStyle}>{label}</Text>
            <TextInput
                autoCorrect={false}
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                value={value}
                onChangeText={onChangeText}
                style={inputStyle }
            />
        </View>
    );
}

const styles = {

    container: {
        flex : 1,
        flexDirection: 'row',
        height: 40,
        alignItems: 'center'

    },
    lableStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    inputStyle: {
        width: 20, 
        height: 100,
        color : '#000',
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23,
        flex: 2 
    }
}

export default Input;