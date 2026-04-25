import { NavigationContainer } from 'react';
import { Text, StyleSheet, View } from 'react-native';


const ExerciseScreen = () => {
    let message = "hello world";

    return (

        <View>
        <Text style={styles.textstyle1}> {message}</Text>
        <Text style={styles.textstyle2}> {message}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    textstyle1: {
        color: '#00ff6a',
        fontSize: 30
    },
    textstyle2: {
        fontSize: 30,
        color: '#ff0000'

    }
});

export default ExerciseScreen;