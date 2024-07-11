import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import PumpForm from '../components/pump/pumpForm';

export default function PumpScreen() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleNewPump = () => {
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text>עמוד משאבה</Text>
      <Button
        title="משאבה חדשה"
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
