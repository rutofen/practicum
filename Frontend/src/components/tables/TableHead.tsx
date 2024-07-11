import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TableHeader from './TableHeader';

interface TableHeadProps {
  headers: string[];
}

const TableHead: React.FC<TableHeadProps> = ({ headers }) => {
  return (
    <View style={styles.headerRow}>
      {headers.map((header, index) => (
        <TableHeader key={index} header={header} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
  },
});

export default TableHead;
