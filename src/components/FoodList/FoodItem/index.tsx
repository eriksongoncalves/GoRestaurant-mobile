import React from 'react';

import {
  Container,
  ImageContainer,
  ImageFood,
  InfoContainer,
  Title,
  Description,
  Price,
} from './styles';

import { formatCurrency } from '../../../utils/formatNumbers';

type FoodItemProps = {
  food: Omit<Food, 'image_url'>;
  onPress: (food: Omit<Food, 'image_url'>) => void;
};

const FoodItem: React.FC<FoodItemProps> = ({ food, onPress }) => {
  return (
    <Container onPress={() => onPress(food)}>
      <ImageContainer>
        <ImageFood source={{ uri: food.thumbnail_url }} />
      </ImageContainer>
      <InfoContainer>
        <Title>{food.name}</Title>
        <Description>{food.description}</Description>
        <Price>{formatCurrency(food.price)}</Price>
      </InfoContainer>
    </Container>
  );
};

export default FoodItem;
