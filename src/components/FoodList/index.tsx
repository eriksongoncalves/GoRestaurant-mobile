import React from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, SectionTitle, List } from './styles';

import FoodItem from './FoodItem';

import theme from '../../styles/Theme/theme';

type FoodListProps = {
  foods: Omit<Food, 'image_url'>[];
  title?: string;
  loading?: boolean;
  onPress: (food: Omit<Food, 'image_url'>) => void;
};

/**
 * Represents a list of foods.
 * @function
 * @param {Array} foods - food items.
 * @param {string} title - Title of section.
 * @param {boolean} loading - loading.
 * @param {function(food: Food): void} onPress - callback function when selected some food
 */

const FoodList: React.FC<FoodListProps> = ({
  foods,
  title,
  loading,
  onPress,
}) => {
  return (
    <Container>
      {title && <SectionTitle>{title}</SectionTitle>}
      {loading && <ActivityIndicator color={theme.colors.primary} />}
      <List
        data={foods}
        keyExtractor={item => String(item.id)}
        renderItem={({ item }) => <FoodItem food={item} onPress={onPress} />}
      />
    </Container>
  );
};

export default FoodList;
