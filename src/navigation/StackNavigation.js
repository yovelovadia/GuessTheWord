import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Header } from '@components';
import { Menu, Game, LeaderBoards, GameOver } from '../screens';
import routes from './routes';

const Stack = createStackNavigator();

const RootStack = () => (
  <Stack.Navigator
    screenOptions={{
      header: (props) => <Header {...props} />,
      headerTransparent: true,
    }}
    initialRouteName={routes.menu.name}
    headerMode="float"
  >
    <Stack.Screen name={routes.menu.name} component={Menu} />
    <Stack.Screen name={routes.game.name} component={Game} />
    <Stack.Screen name={routes.leaderBoards.name} component={LeaderBoards} />
    <Stack.Screen name={routes.gameOver.name} component={GameOver} />
  </Stack.Navigator>
);

const StackNavigation = () => (
  <NavigationContainer>
    <RootStack />
  </NavigationContainer>
);

export default StackNavigation;
