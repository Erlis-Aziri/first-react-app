import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from './screens/MainScreen';
import ExerciseScreen from './screens/ExerciseScreen';
import ListScreen from './screens/ListScreen';
import ChScreen from './screens/ChScreen';
import ChalScreen from './screens/ChalScreen';
import ButtonScreen from './screens/ButtonScreen';
import MenuScreen from './screens/MenuScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />

      <Stack.Navigator
        initialRouteName="Menu"
        screenOptions={{
          title: "Students"
        }}
      >
        <Stack.Screen name="Home" component={MainScreen} />
        <Stack.Screen name="List" component={ListScreen} />
        <Stack.Screen name="Exercise" component={ExerciseScreen} />
        <Stack.Screen name="Test" component={CarsList} />
        <Stack.Screen name="Button" component={ButtonScreen}  />
        <Stack.Screen name="Menu" component={MenuScreen}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});