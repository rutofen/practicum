import React  from "react";
import { StyleSheet, View } from "react-native";
import UserButton from '../components/user-button';

const User :React.FC = () =>{
    return (
        <View style={styles.container}>
            <UserButton />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F5FCFF',
    },
})

export default User;