import styled from 'styled-components/native';
import { Title } from '../../styles/global';

export const Container = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  justify-content: center;
  align-items: center;
`;

export const MessageText = styled(Title)`
  font-size: 24px;
  line-height: 28px;
  color: ${props => props.theme.colors.white};
  margin-top: 27px;
`;
