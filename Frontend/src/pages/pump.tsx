import React  from "react";
import { StyleSheet, View } from "react-native";
import PumpButton from '../components/pump/PumpButton';

const Pump :React.FC = () =>{
    return (
        <View style={styles.container}>
            <PumpButton />
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

export default Pump;