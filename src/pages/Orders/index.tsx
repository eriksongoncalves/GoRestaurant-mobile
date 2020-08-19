import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Header, HeaderTitle, FoodListContainer } from './styles';
import FoodList from '../../components/FoodList';
import api from '../../services/api';

const Orders: React.FC = () => {
  const navigation = useNavigation();

  const [orders, setOrders] = useState<Omit<Food, 'image_url'>[]>([]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      async function getOrders() {
        try {
          const response = await api.get<Omit<Food, 'image_url'>[]>('orders');
          setOrders(response.data);
        } catch (err) {
          console.log('Orders Err - ', err);
        }
      }

      getOrders();
    });
  }, [navigation]);

  return (
    <Container>
      <Header hasOrders={!!orders.length}>
        <HeaderTitle>Meus pedidos</HeaderTitle>
      </Header>

      <FoodListContainer>
        <FoodList foods={orders} loading={false} onPress={() => {}} />
      </FoodListContainer>
    </Container>
  );
};

export default Orders;
