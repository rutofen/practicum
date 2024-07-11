import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PumpForm from './pumpForm';

const PumpButton: React.FC = () => {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleNewPump = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text>Pump page</Text>
      <Button
        title="New pump"
        onPress={handleNewPump}
      />
      <PumpForm
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});

export default PumpButton;
