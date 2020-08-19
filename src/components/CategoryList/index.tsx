import React from 'react';
import { ActivityIndicator } from 'react-native';

import {
  CategoryContainer,
  SectionTitle,
  CategorySlider,
  CategoryItem,
  CategoryImage,
  CategoryItemTitle,
} from './styles';

import theme from '../../styles/Theme/theme';

type CategoryListProps = {
  categorySelected: number | undefined;
  categories: Category[];
  changeCategory: (category: number) => void;
};

const CategoryList: React.FC<CategoryListProps> = ({
  categorySelected,
  categories,
  changeCategory,
}) => {
  return (
    <CategoryContainer>
      <SectionTitle>Categorias</SectionTitle>

      {!categories.length && <ActivityIndicator color={theme.colors.primary} />}

      <CategorySlider horizontal showsHorizontalScrollIndicator={false}>
        {categories.map(category => (
          <CategoryItem
            key={category.id}
            isSelected={category.id === categorySelected}
            onPress={() => {
              changeCategory(category.id);
            }}
            activeOpacity={0.6}
          >
            <CategoryImage source={{ uri: category.image_url }} />
            <CategoryItemTitle>{category.title}</CategoryItemTitle>
          </CategoryItem>
        ))}
      </CategorySlider>
    </CategoryContainer>
  );
};

export default CategoryList;
