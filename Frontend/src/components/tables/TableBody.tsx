import React from 'react';
import { View } from 'react-native';
import TableRow from './TableRow';

interface TableBodyProps {
  data: (string | number)[][];
}

const TableBody: React.FC<TableBodyProps> = ({ data }) => {
  return (
    <View>
      {data.map((rowData, rowIndex) => (
        <TableRow key={rowIndex} rowData={rowData} />
      ))}
    </View>
  );
};

export default TableBody;
