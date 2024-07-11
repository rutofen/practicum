import React from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import TableHead from './TableHead';
import TableBody from './TableBody';

interface TableProps {
  headers: string[];
  data: (string | number)[][];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.table}>
        <TableHead headers={headers} />
        <TableBody data={data} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  table: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default Table;
