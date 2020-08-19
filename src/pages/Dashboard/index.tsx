import React, { useEffect, useState, useMemo } from 'react';
import { Image } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  FilterContainer,
  FoodList,
  FoodListTitle,
} from './styles';
import logo from '../../assets/logo-header.png';
import api from '../../services/api';
import SearchInput from '../../components/SearchInput';
import CategoryList from '../../components/CategoryList';
import FoodItem from '../../components/FoodList/FoodItem';
import theme from '../../styles/Theme/theme';

const Dashboard: React.FC = () => {
  const navigation = useNavigation();
  const [foods, setFoods] = useState<Food[]>([]);
  const [categorySelected, setCategorySelected] = useState<number>();
  const [categories, setCategories] = useState<Category[]>([]);
  const [searchValue, setSearchValue] = useState('');

  const filterFoods = useMemo<Food[]>(() => {
    if (!searchValue) {
      return foods;
    }

    return foods.filter(
      food =>
        food.name.includes(searchValue) ||
        food.description.includes(searchValue),
    );
  }, [foods, searchValue]);

  useEffect(() => {
    api.get<Category[]>('/categories').then(response => {
      setCategories(response.data);
    });

    api.get<Food[]>('/foods').then(response => {
      setFoods(response.data);
    });
  }, []);

  useEffect(() => {
    if (categorySelected) {
      api.get<Food[]>(`/foods?category=${categorySelected}`).then(response => {
        setSearchValue('');
        setFoods(response.data);
      });
    }
  }, [categorySelected]);

  async function handleClickFoodList(food: Omit<Food, 'image_url'>) {
    const { data } = await api.get<Category>(`categories/${food.category}`);

    navigation.navigate('Detail', { food, categoryName: data.title });
  }

  return (
    <Container>
      <Header>
        <Image source={logo} />
        <Icon
          name="log-out"
          size={24}
          color={theme.colors.secondary}
          onPress={() => navigation.navigate('Home')}
        />
      </Header>
      <FilterContainer>
        <SearchInput
          value={searchValue}
          onChangeText={setSearchValue}
          placeholder="Qual comida você procura?"
        />
      </FilterContainer>

      <CategoryList
        categorySelected={categorySelected}
        categories={categories}
        changeCategory={category => setCategorySelected(category)}
      />

      <FoodListTitle>Pratos</FoodListTitle>
      <FoodList>
        {filterFoods.map(food => (
          <FoodItem key={food.id} food={food} onPress={handleClickFoodList} />
        ))}
      </FoodList>
    </Container>
  );
};

export default Dashboard;
