import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import TableRow from './TableRow';

interface TableProps {
  headers: string[];
  data: (string | number)[][];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.table}>
        <View style={styles.headerRow}>
          {headers.map((header, index) => (
            <Text key={index} style={[styles.cell, styles.headerCell]}>{header}</Text>
          ))}
        </View>
        {data.map((rowData, rowIndex) => (
          <TableRow key={rowIndex} rowData={rowData} />
        ))}
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
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
  },
  cell: {
    paddingVertical: 16, 
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    flex: 1,
    minWidth: 100, 
  },
  headerCell: {
    fontWeight: 'bold',
  },
});

export default Table;
