import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Header, HeaderTitle, FoodListContainer } from './styles';
import FoodList from '../../components/FoodList';
import api from '../../services/api';

const Orders: React.FC = () => {
  const navigation = useNavigation();
  const [favorites, setFavorites] = useState<Omit<Food, 'image_url'>[]>([]);

  useEffect(() => {
    navigation.addListener('focus', () => {
      async function getFavorites() {
        try {
          const response = await api.get<Omit<Food, 'image_url'>[]>(
            'favorites',
          );
          setFavorites(response.data);
        } catch (err) {
          console.log('Favorites Err - ', err);
        }
      }

      getFavorites();
    });
  }, [navigation]);

  return (
    <Container>
      <Header hasFavorites={!!favorites}>
        <HeaderTitle>Meus favoritos</HeaderTitle>
      </Header>

      <FoodListContainer>
        <FoodList
          foods={favorites}
          loading={!favorites.length}
          onPress={() => {}}
        />
      </FoodListContainer>
    </Container>
  );
};

export default Orders;
