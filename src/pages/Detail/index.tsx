import React, { useLayoutEffect, useState, useMemo, useEffect } from 'react';
import { TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  ScrollContainer,
  FoodCardContainer,
  SectionTitle,
  AdditionalsContainer,
  AdittionalItem,
  AdittionalItemText,
  AdittionalQuantity,
  TotalContainer,
  PriceContainer,
  TotalPrice,
  TotalQuantity,
  FinishOrderButton,
  ButtonText,
  IconContainer,
} from './styles';
import FoodCard from '../../components/FoodCard';
import ModalSuccess from '../../components/ModalSuccess';
import { formatCurrency } from '../../utils/formatNumbers';
import api from '../../services/api';
import theme from '../../styles/Theme/theme';

type RoutePropParams = {
  Detail: {
    categoryName: string;
    food: Food;
  };
};

type DetailRouteProp = RouteProp<RoutePropParams, 'Detail'>;

type DetailProps = {
  route: DetailRouteProp;
  navigation: StackNavigationProp<any>;
};

const Detail: React.FC<DetailProps> = ({ route, navigation }) => {
  const { food, categoryName } = route.params;
  const [extras, setExtras] = useState<Extras[]>(() => {
    return food.extras.map(extra => ({ ...extra, quantity: 0 }));
  });
  const [totalOrderItems, setTotalOrderItems] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [messageSuccess, setMessageSuccess] = useState('');

  const favoriteIconName = useMemo(() => {
    return isFavorite ? 'favorite' : 'favorite-border';
  }, [isFavorite]);

  const totalExtras = useMemo<number>(() => {
    return extras.reduce(
      (total, extra) => total + extra.quantity! * extra.value,
      0,
    );
  }, [extras]);

  const totalOrder = useMemo(() => {
    return food.price * totalOrderItems + totalExtras * totalOrderItems;
  }, [food.price, totalOrderItems, totalExtras]);

  function handleAddRemoveExtras(extraId: number, quantity: number) {
    const extraIndex = extras.findIndex(extra => extra.id === extraId);
    const extraSelected = extras[extraIndex];

    if (extraSelected.quantity === 0 && quantity < 0) {
      return;
    }

    const updatedExtras = [...extras];
    updatedExtras[extraIndex] = {
      ...extraSelected,
      quantity: extraSelected.quantity! + quantity,
    };

    setExtras(updatedExtras);
  }

  function handleAddRemoveTotal(quantity: number) {
    if (totalOrderItems === 1 && quantity < 0) {
      return;
    }

    setTotalOrderItems(prevValue => prevValue + quantity);
  }

  async function finishedOrder() {
    const myFood = { ...food };
    delete myFood.id;
    delete myFood.image_url;

    const myOrder: Order = {
      ...myFood,
      product_id: food.id,
      extras: extras.filter(extra => extra.quantity! > 0),
    };

    try {
      await api.post('orders', { ...myOrder });
      setMessageSuccess('Pedido realizado!');
    } catch (e) {
      console.error(e);
    }
  }

  useLayoutEffect(() => {
    async function toogleFavorite() {
      try {
        if (isFavorite) {
          await api.delete(`favorites/${food.id}`);
          setIsFavorite(false);
        } else {
          await api.post<Favorite>('favorites', { ...food });
          setIsFavorite(true);
        }
      } catch (err) {
        console.log('Favorite Err - ', err);
      }
    }

    navigation.setOptions({
      headerTitle: `Prato - ${categoryName}`,
      headerRight: () => (
        <TouchableOpacity onPress={toogleFavorite}>
          <MaterialIcon name={favoriteIconName} size={24} color="#FFB84D" />
        </TouchableOpacity>
      ),
    });
  }, [categoryName, favoriteIconName, food, isFavorite, navigation]);

  useEffect(() => {
    if (messageSuccess) {
      setTimeout(() => {
        setMessageSuccess('');
        navigation.goBack();
      }, 2000);
    }
  }, [navigation, messageSuccess]);

  useEffect(() => {
    async function getFavorite() {
      try {
        const response = await api.get<Favorite>(`favorites/${food.id}`);

        if (response.data) {
          setIsFavorite(true);
        }
      } catch (err) {
        console.log('Favorite Err - ', err);
      }
    }

    getFavorite();
  }, [food.id]);

  return (
    <>
      <Container>
        <Header />

        <ScrollContainer>
          <FoodCardContainer>
            <FoodCard food={food} />
          </FoodCardContainer>
          <AdditionalsContainer>
            <SectionTitle>Adicionais</SectionTitle>
            {extras.map(extra => (
              <AdittionalItem key={extra.id}>
                <AdittionalItemText>{extra.name}</AdittionalItemText>
                <AdittionalQuantity>
                  <TouchableWithoutFeedback
                    onPress={() => handleAddRemoveExtras(extra.id, -1)}
                  >
                    <Icon
                      size={15}
                      color={theme.colors.cardText}
                      name="minus"
                    />
                  </TouchableWithoutFeedback>
                  <AdittionalItemText>{extra.quantity}</AdittionalItemText>
                  <TouchableWithoutFeedback
                    onPress={() => handleAddRemoveExtras(extra.id, 1)}
                  >
                    <Icon size={15} color={theme.colors.cardText} name="plus" />
                  </TouchableWithoutFeedback>
                </AdittionalQuantity>
              </AdittionalItem>
            ))}
          </AdditionalsContainer>
          <TotalContainer>
            <SectionTitle>Total do pedido</SectionTitle>
            <PriceContainer>
              <TotalPrice>{formatCurrency(totalOrder)}</TotalPrice>
              <TotalQuantity>
                <TouchableWithoutFeedback
                  onPress={() => handleAddRemoveTotal(-1)}
                >
                  <Icon size={15} color={theme.colors.cardText} name="minus" />
                </TouchableWithoutFeedback>
                <AdittionalItemText>{totalOrderItems}</AdittionalItemText>
                <TouchableWithoutFeedback
                  onPress={() => handleAddRemoveTotal(1)}
                >
                  <Icon size={15} color={theme.colors.cardText} name="plus" />
                </TouchableWithoutFeedback>
              </TotalQuantity>
            </PriceContainer>

            <FinishOrderButton onPress={finishedOrder}>
              <ButtonText>Confirmar pedido</ButtonText>
              <IconContainer>
                <Icon
                  name="check-square"
                  size={24}
                  color={theme.colors.white}
                />
              </IconContainer>
            </FinishOrderButton>
          </TotalContainer>
        </ScrollContainer>
      </Container>
      {!!messageSuccess && <ModalSuccess message={messageSuccess} />}
    </>
  );
};

export default Detail;
