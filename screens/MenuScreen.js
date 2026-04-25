import React from "react";
import { Text, View, Style, Button } from "react-native";

const MenuScreen = (props) => {
    console.log(props);
    return(
        <View>
          
            <Text style={styles.text}>Welcome to menu screen</Text>
            <Button
                title="go to list Screen"
                onPress={() => {props.navigation.navigate("List")}}
            ></Button>
        </View>
    )


}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 20
    }

});

export default MenuScreen;