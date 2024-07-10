import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Modal, TextInput, Pressable } from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [description, setDescription] = useState('');

  const handleNewResource = () => {
    setModalVisible(true);
  };

  const handleSubmit = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text>Welcome to my app!</Text>
      <Button title="new pump" onPress={handleNewResource} />

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Add new pump description</Text>
            <TextInput
              style={styles.input}
              placeholder="Description of the pump" 
              onChangeText={setDescription}
              value={description}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={handleSubmit}
            >
              <Text style={styles.textStyle}>sava</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 15,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: 200,
    color: 'gray'
  },
});
