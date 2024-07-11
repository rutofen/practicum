import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface TableCellProps {
  cellData: string | number;
}

const TableCell: React.FC<TableCellProps> = ({ cellData }) => {
  return <Text style={styles.cell}>{cellData}</Text>;
};

const styles = StyleSheet.create({
  cell: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    textAlign: 'center',
    flex: 1,
    minWidth: 150,
  },
});

export default TableCell;
