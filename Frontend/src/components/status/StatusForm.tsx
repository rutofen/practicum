import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

type Props = {
  onSubmit: (status: { description: string }) => void;
  onCancel: () => void;
};

const StatusForm: React.FC<Props> = ({ onSubmit, onCancel }) => {
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    onSubmit({ description });
    setDescription('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Save" onPress={handleSubmit} />
      <View style={styles.separator} />
      <Button title="Cancel" onPress={onCancel} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  separator: {
    height: 10,
  },
});

export default StatusForm;
