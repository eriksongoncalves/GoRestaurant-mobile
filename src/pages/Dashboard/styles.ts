import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { Title } from '../../styles/global';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

export const Header = styled.View`
  height: ${getStatusBarHeight() + 148}px;
  padding: ${getStatusBarHeight() + 40}px 24px;
  background: ${props => props.theme.colors.primary};
  flex-direction: row;
  justify-content: space-between;
`;

export const FilterContainer = styled.View`
  padding: 0 24px;
  margin-top: -28px;
`;

export const FoodListTitle = styled(Title)`
  padding: 0 20px;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const FoodList = styled.ScrollView`
  padding: 0 20px;
`;
