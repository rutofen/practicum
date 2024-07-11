
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Table from '../components/tables/Table';

const MyTableComponent: React.FC = () => {
  const headers = ['status_id', 'status_name', 'description', 'status'];
  const data = [
    ['1', 'Pending', 'The operation is pending', '0'],
    ['2', 'progress', 'in the process of execution', '1'],
    ['3', 'Completed', 'Successfully completed', '1'],
    ['4', 'Failed', 'failed need repair', '0'],
    ['5', 'Suspended', 'Temporarily suspended', '1'],
  ];



  return (
    <View >
      <Table headers={headers} data={data} />
    </View>
  );
};

export default MyTableComponent;
