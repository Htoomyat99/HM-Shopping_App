import {View, Text} from 'react-native';
import React, {useState} from 'react';

//components
import ProductDetailScreen from '../../components/Dashboard/productDetail/ProductDetailScreen';

const ProductDetail = ({navigation, route}) => {
  const {productData} = route.params;

  const [favorite, setFavorite] = useState(false);

  return (
    <ProductDetailScreen
      data={productData}
      backHandler={() => navigation.navigate('Dashboard')}
      loveHandler={() => setFavorite(!favorite)}
      favorite={favorite}
    />
  );
};

export default ProductDetail;
