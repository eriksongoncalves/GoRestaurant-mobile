import styled from 'styled-components/native';

import { Title } from '../../styles/global';

export const Card = styled.View`
  background: ${props => props.theme.colors.bgCard};
  border-radius: 8px;
`;

export const CardHeader = styled.View`
  height: 180px;
  background: ${props => props.theme.colors.secondary};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  justify-content: flex-end;
  align-items: center;
`;

export const CardImage = styled.Image`
  width: 253px;
  height: 178px;
`;

export const CardContent = styled.View`
  padding: 30px;
`;

export const CardTitle = styled(Title)`
  font-size: 20px;
  padding-left: 0;
  margin-bottom: 8px;
`;

export const CardDescription = styled.Text`
  font-size: 15px;
  line-height: 25px;
`;

export const CardPrice = styled(Title)`
  margin-top: 16px;
  margin-bottom: 0px;
  padding-left: 0;
  font-size: 24px;
  line-height: 28px;
  color: ${props => props.theme.colors.cardText};
`;
