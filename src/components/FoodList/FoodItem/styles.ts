import styled from 'styled-components/native';
import { BaseButton } from 'react-native-gesture-handler';

import { SectionTitle } from '../styles';

export const Container = styled(BaseButton)`
  flex-direction: row;
  align-items: center;
  background: ${props => props.theme.colors.bgCard};
  margin-bottom: 16px;
  border-radius: 8px;
`;

export const ImageContainer = styled.View`
  background: ${props => props.theme.colors.secondary};
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  padding: 16px;
  height: 100%;
`;

export const ImageFood = styled.Image`
  width: 88px;
  height: 88px;
`;

export const InfoContainer = styled.View`
  flex: 1;
  padding-left: 16px;
`;

export const Title = styled(SectionTitle)`
  padding: 0;
  font-size: 15px;
  margin-bottom: 5px;
`;

export const Description = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 10px;
  color: #3d3d4d;
  line-height: 16px;
  margin-bottom: 8px;
`;

export const Price = styled.Text`
  font-family: 'Poppins-Regular';
  font-size: 18px;
  color: ${props => props.theme.colors.greenDark};
  line-height: 21px;
  margin-bottom: 8px;
  font-weight: 600;
`;
