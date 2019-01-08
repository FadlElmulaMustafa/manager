import React from 'react';
import { View }  from 'react-native';

const CardSection = (props) => {
    return(
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
}

const styles = {
    containerStyle: {
        borderbottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContnet: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative',
    }
}

export default CardSection;