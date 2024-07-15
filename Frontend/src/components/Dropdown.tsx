import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

interface Option {
  id: number;
  name: string;
}

interface DropdownProps {
  statuses?: Option[];
}

const Dropdown: React.FC<DropdownProps> = ({ statuses }) => {
  const [options, setOptions] = useState<Option[]>(statuses || []);

  useEffect(() => {
    if (statuses && statuses.length > 0) {
      setOptions(statuses);
    }
  }, [statuses]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select an option:</Text>
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
