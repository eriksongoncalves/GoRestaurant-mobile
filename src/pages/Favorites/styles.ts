import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: ${props => props.theme.colors.white};
`;

type HeaderProps = {
  hasFavorites: boolean;
};

export const Header = styled.View<HeaderProps>`
  height: ${props => (props.hasFavorites ? getStatusBarHeight() + 100 : 100)}px;
  background: ${props => props.theme.colors.primary};
  padding-top: ${getStatusBarHeight() + 20}px;
`;

export const HeaderTitle = styled.Text`
  color: ${props => props.theme.colors.white};
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
`;

export const FoodListContainer = styled.View`
  flex: 1;
  margin-top: -70px;
`;
