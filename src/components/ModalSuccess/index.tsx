import React from 'react';
import { Modal } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Container, MessageText } from './styles';

import theme from '../../styles/Theme/theme';

type ModalSuccessProps = {
  message: string;
};

const ModalSuccess: React.FC<ModalSuccessProps> = ({ message }) => (
  <Modal
    animated
    animationType="fade"
    visible
    transparent
    onRequestClose={() => {}}
  >
    <Container>
      <Icon name="thumbs-up" color={theme.colors.greenDark} size={40} />
      <MessageText>{message}</MessageText>
    </Container>
  </Modal>
);

export default ModalSuccess;
