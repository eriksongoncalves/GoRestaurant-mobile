import styled from 'styled-components/native';
import { Title } from '../../styles/global';

export const Container = styled.View`
  flex: 1;
  background-color: ${props => props.theme.colors.white};
`;

export const Header = styled.View`
  height: 60px;
  background: ${props => props.theme.colors.primary};
`;

export const ScrollContainer = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 40,
  },
})`
  margin-top: -40px;
`;

export const FoodCardContainer = styled.View`
  padding: 0 24px;
`;

export const SectionTitle = styled(Title)`
  padding-left: 0;
`;

export const AdditionalsContainer = styled.View`
  padding: 0 24px;
  margin-top: 40px;
`;

export const AdittionalItem = styled.View`
  height: 40px;
  background: ${props => props.theme.colors.bgCard};
  border-radius: 8px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  margin-top: 8px;
`;

export const AdittionalItemText = styled.Text`
  font-family: 'Poppins-Regular';
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  color: ${props => props.theme.colors.cardText};
`;

export const AdittionalQuantity = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 105px;
`;

export const TotalContainer = styled.View`
  padding: 0 24px;
  margin-top: 40px;
`;

export const PriceContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const TotalPrice = styled(Title)`
  font-size: 24px;
  color: ${props => props.theme.colors.greenDark};
  padding: 0;
  margin: 0;
`;

export const TotalQuantity = styled(AdittionalQuantity)`
  background: ${props => props.theme.colors.bgCard};
  align-items: center;
  height: 40px;
  border-radius: 5px;
  padding: 0 15px;
`;

export const FinishOrderButton = styled.TouchableOpacity`
  background: ${props => props.theme.colors.greenDark};
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  margin-top: 26px;
`;

export const ButtonText = styled.Text`
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  color: ${props => props.theme.colors.white};
  flex: 1;
  text-align: center;
`;

export const IconContainer = styled.View`
  background-color: ${props => props.theme.colors.greenLight};
  padding: 16px;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`;
