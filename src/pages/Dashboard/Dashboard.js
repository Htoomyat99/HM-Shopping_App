import {View, Text} from 'react-native';
import React, {useContext} from 'react';

//components
import DashboardScreen from '../../components/Dashboard/product/DashboardScreen';
import ProductHeader from '../../components/Dashboard/productHeader/ProductHeader';
import {AuthContext} from '../../context/context';

const Dashboard = ({navigation}) => {
  const {darkMode} = useContext(AuthContext);
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: darkMode ? '#222' : '#fff',
      }}>
      <ProductHeader openDrawer={() => navigation.openDrawer()} />
      <DashboardScreen
        productHandler={() => navigation.navigate('ProductDetail')}
      />
    </View>
  );
};

export default Dashboard;
