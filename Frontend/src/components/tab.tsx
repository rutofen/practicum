import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TabProps {
    color: string;
}

export function Tab({ color }: TabProps) {
    const [backgroundColor, setBackgroundColor] = useState(color);

    useEffect(() => {
        setBackgroundColor(color);
    }, [color]);

    return (
        <View style={[styles.container, { backgroundColor }]}>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default Tab;
