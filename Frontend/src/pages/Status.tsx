import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import StatusButton from '../components/status/StatusButton';
import StatusForm from '../components/status/StatusForm';

const Status: React.FC = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [statuses, setStatuses] = useState<{ description: string }[]>([]);

  const handleAddNewStatus = () => {
    setIsFormVisible(true);
  };

  const handleSubmit = (status: { description: string }) => {
    setStatuses([...statuses, status]);
    setIsFormVisible(false);
  };

  const handleCancel = () => {
    setIsFormVisible(false);
  };

  return (
    <View style={styles.container}>
      <StatusButton onPress={handleAddNewStatus} />
      {isFormVisible && (
        <StatusForm onSubmit={handleSubmit} onCancel={handleCancel} />
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

export default Status;
