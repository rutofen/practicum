import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TableHeaderProps {
  header: string;
}

const TableHeader: React.FC<TableHeaderProps> = ({ header }) => {
  return <Text style={[styles.cell, styles.headerCell]}>{header}</Text>;
};

const styles = StyleSheet.create({
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

export default TableHeader;
