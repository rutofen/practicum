import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native';
import NewUserForm from './user-form';

const UserButton: React.FC = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  return (
    <View style={styles.container}>
      {!showForm &&(
      <TouchableOpacity style={styles.button} onPress={handleOpenForm}>
        <Text style={styles.text}>New User</Text>
      </TouchableOpacity>
    )}
      {showForm && <NewUserForm />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  button: {
    backgroundColor: '#F1948A',
    padding: 10,
    borderRadius: 5,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 28,
    lineHeight: 32,
    marginTop: -6,
    textAlign: 'center',
  },
});

export default UserButton;