import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/Feather';

import TabRoutes from './tabs.routes';
import Home from '../pages/Home';
import Detail from '../pages/Detail';

import theme from '../styles/Theme/theme';

const App = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <NavigationContainer>
      <App.Navigator>
        <App.Screen
          name="Home"
          component={Home}
          options={{
            cardStyle: { backgroundColor: theme.colors.primary },
            headerShown: false,
          }}
        />

        <App.Screen
          name="MainBottom"
          component={TabRoutes}
          options={{
            headerShown: false,
            gestureEnabled: true,
          }}
        />

        <App.Screen
          name="Detail"
          component={Detail}
          options={({ navigation }) => ({
            headerLeft: () => (
              <Icon
                name="arrow-left"
                size={24}
                color={theme.colors.secondary}
                onPress={() => navigation.goBack()}
              />
            ),
            headerLeftContainerStyle: {
              marginLeft: 24,
            },
            headerRight: () => (
              <Icon name="heart" size={24} color={theme.colors.secondary} />
            ),
            headerRightContainerStyle: {
              marginRight: 24,
            },
            headerTitle: 'Prato - Massas',
            headerTitleStyle: {
              color: theme.colors.white,
              fontFamily: 'Poppins-Regular',
              fontSize: 16,
            },
            headerStyle: {
              backgroundColor: theme.colors.primary,
              elevation: 0,
              borderWidth: 0,
              shadowColor: 'transparent',
            },
          })}
        />
      </App.Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
