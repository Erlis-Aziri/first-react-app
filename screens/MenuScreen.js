import React from "react";
import { Text, View, Style} from "react-native";

const MenuScreen = (props) => {
    return(
        <View>
            <Text style={styles.text}>Welcome to menu screen</Text>
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