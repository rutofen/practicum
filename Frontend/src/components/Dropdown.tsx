
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface Option {
  id: number;
  name: string;
}

const defStatuses: Option[] = [
  { id: 1, name: 'Pending' },
  { id: 2, name: 'progress' },
  { id: 3, name: 'Completed' },
  { id: 4, name: 'Failed' },
  { id: 5, name: 'Suspended' },
];

interface DropdownProps {
  statuses?: Option[];
}


const Dropdown: React.FC<DropdownProps> = ({ statuses }) => {
  const [options, setOptions] = useState<Option[]>(statuses || []);

  useEffect(() => {
    if (!statuses?.length)
      setOptions(defStatuses)
    else
      fetchData();

  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/users');
      const data = await response.json();
      setOptions(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>:</Text>
      <Picker style={styles.dropdown}>
        {options.map(option => (
          <Picker.Item key={option.id} label={option.name} value={option.id} />
        ))}
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});



export default Dropdown;

