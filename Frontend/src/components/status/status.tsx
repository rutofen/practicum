import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StatusButton from './StatusButton';
import StatusForm from './StatusForm';

const status: React.FC = () => {
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default status;
