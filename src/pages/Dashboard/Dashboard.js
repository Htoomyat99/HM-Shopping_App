import {View, Text} from 'react-native';
import React from 'react';

import DashboardScreen from '../../components/Dashboard/DashboardScreen';

const Dashboard = ({navigation}) => {
  return <DashboardScreen navi={() => navigation.navigate('ProductDetail')} />;
};

export default Dashboard;
