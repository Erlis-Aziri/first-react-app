import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const MainScreen = () => {
    return(
        <View style={styles.container}>
            <Text style={styles.textStyle}>This is Test Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff0000',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontSize: 30
    }
});

export default MainScreen;

