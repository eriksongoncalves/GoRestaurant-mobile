import React from 'react';
import { Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  BackgroundImage,
  Title,
  NavigationButton,
  ButtonText,
  IconContainer,
} from './styles';

import Background from '../../assets/home-background.png';
import Logo from '../../assets/logo.png';

import theme from '../../styles/Theme/theme';

const Home: React.FC = () => {
  const navigation = useNavigation();

  async function handleNavigate() {
    navigation.navigate('MainBottom', {
      screen: 'Dashboard',
    });
  }

  return (
    <BackgroundImage source={Background}>
      <Container>
        <Image source={Logo} />
        <Title>Uma verdadeira experiência Italiana.</Title>
      </Container>
      <NavigationButton onPress={() => handleNavigate()}>
        <ButtonText>Entrar no Restaurant</ButtonText>
        <IconContainer>
          <Icon name="log-in" size={24} color={theme.colors.primary} />
        </IconContainer>
      </NavigationButton>
    </BackgroundImage>
  );
};

export default Home;
