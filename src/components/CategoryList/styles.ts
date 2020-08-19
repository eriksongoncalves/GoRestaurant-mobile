import styled, { css } from 'styled-components/native';
import { Title } from '../../styles/global';

interface CategoryItemProps {
  isSelected?: boolean;
}

export const CategoryContainer = styled.View`
  margin-top: 40px;
  align-items: flex-start;
  padding: 0 20px;
`;

export const SectionTitle = styled(Title)``;

export const CategorySlider = styled.ScrollView`
  margin-top: 16px;
`;

export const CategoryItem = styled.TouchableOpacity<CategoryItemProps>`
  background-color: ${props => props.theme.colors.bgCard};
  border: 2px;
  border-color: ${props => props.theme.colors.bgCard};
  height: 120px;
  width: 120px;
  border-radius: 8px;
  padding-top: 20px;
  padding-bottom: 16px;
  margin-right: 8px;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  ${props =>
    props.isSelected &&
    css`
      border-color: ${props => props.theme.colors.primary};
      background-color: ${props => props.theme.colors.categorySelected};
    `}
`;

export const CategoryImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const CategoryItemTitle = styled.Text`
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 15px;
  text-align: center;
  color: #6c6c80;
`;
