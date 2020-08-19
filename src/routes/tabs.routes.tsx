import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';

import Dashboard from '../pages/Dashboard';
import Favorites from '../pages/Favorites';
import Orders from '../pages/Orders';

import theme from '../styles/Theme/theme';

const Tab = createBottomTabNavigator();

const TabRoutes = () => (
  <Tab.Navigator
    tabBarOptions={{
      labelPosition: 'beside-icon',
      activeTintColor: theme.colors.primary,
      labelStyle: {
        fontFamily: 'Poppins-Regular',
        fontSize: 12,
        fontWeight: '600',
      },
      inactiveTintColor: theme.colors.inactiveTab,
    }}
  >
    <Tab.Screen
      options={{
        tabBarIcon: ({ color }) => <Icon size={25} name="list" color={color} />,
        title: 'Listagem',
      }}
      name="DashboardStack"
      component={Dashboard}
    />
    <Tab.Screen
      name="Orders"
      options={{
        tabBarIcon: ({ color }) => (
          <Icon size={25} name="shopping-bag" color={color} />
        ),
        title: 'Pedidos',
      }}
      component={Orders}
    />

    <Tab.Screen
      name="Favorites"
      options={{
        tabBarIcon: ({ color }) => (
          <Icon size={25} name="heart" color={color} />
        ),
        title: 'Favoritos',
      }}
      component={Favorites}
    />
  </Tab.Navigator>
);

export default TabRoutes;
