import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import StatusButton from '../src/components/status/StatusButton';
import StatusForm from '../src/components/status/StatusForm';

export default function App() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleAddNewStatus = () => {
    setIsFormVisible(true);
  };

  const handleSubmit = (status: { description: string }) => {
    console.log('New Status:', status);
    setIsFormVisible(false);
  };

  const handleCancel = () => {
    setIsFormVisible(false);
  };

  return (
    <View style={styles.container}>
      {isFormVisible ? (
        <StatusForm onSubmit={handleSubmit} onCancel={handleCancel} />
      ) : (
        <StatusButton onPress={handleAddNewStatus} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
