import React from 'react';
import { View, StyleSheet } from 'react-native';
import TableCell from './TableCell';

interface TableRowProps {
  rowData: (string | number)[];
}

const TableRow: React.FC<TableRowProps> = ({ rowData }) => {
  return (
    <View style={styles.row}>
      {rowData.map((cellData, cellIndex) => (
        <TableCell key={cellIndex} cellData={cellData} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
  },
});

export default TableRow;
