import React from 'react';

import {
  Card,
  CardHeader,
  CardImage,
  CardContent,
  CardTitle,
  CardDescription,
  CardPrice,
} from './styles';

import { formatCurrency } from '../../utils/formatNumbers';

type FoodCardProps = {
  food: Food;
};

const FoodCard: React.FC<FoodCardProps> = ({ food }) => {
  return (
    <Card>
      <CardHeader>
        <CardImage source={{ uri: food.image_url }} />
      </CardHeader>
      <CardContent>
        <CardTitle>{food.name}</CardTitle>
        <CardDescription>{food.description}</CardDescription>
        <CardPrice>{formatCurrency(food.price)}</CardPrice>
      </CardContent>
    </Card>
  );
};

export default FoodCard;
