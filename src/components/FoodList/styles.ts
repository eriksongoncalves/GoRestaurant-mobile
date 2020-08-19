import styled from 'styled-components/native';
import { FlatList } from 'react-native';

import { Title } from '../../styles/global';

export const Container = styled.View`
  margin-top: 40px;
`;

export const SectionTitle = styled(Title)`
  padding: 0 20px;
  margin-bottom: 20px;
`;

export const List = styled(
  FlatList as new () => FlatList<Omit<Food, 'image_url'>>,
).attrs({
  contentContainerStyle: {
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
})``;
