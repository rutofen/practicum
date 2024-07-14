import React from 'react';
import { Button, StyleSheet, View } from 'react-native';

type Props = {
  onPress: () => void;
};

const StatusButton: React.FC<Props> = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Button title="Add New Status" onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});

export default StatusButton;
