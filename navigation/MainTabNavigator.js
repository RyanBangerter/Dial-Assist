import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import JournalScreen from '../screens/JournalScreen';
import TreatmentScreen from '../screens/TreatmentScreen';
import Fluidcardscreen from '../screens/Fluidcardscreen';
import Foodcardscreen from '../screens/Foodcardscreen';

const FluidcardStack = createStackNavigator({
    Fluidcard: Fluidcardscreen,
});
const FoodcardStack = createStackNavigator({
    Foodcard: Foodcardscreen,
});
const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
};

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Info',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-information${focused ? '' : '-outline'}` : 'md-information'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const JournalStack = createStackNavigator({
  Journal: JournalScreen,
});

JournalStack.navigationOptions = {
  tabBarLabel: 'Journal',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? `ios-book ${focused ? '' : '-outline'}` : 'md-book'}
    />
  ),
};

const TreatmentStack = createStackNavigator({
  Treatment: TreatmentScreen,
});

TreatmentStack.navigationOptions = {
  tabBarLabel: 'Treatment',
  tabBarIcon: ({focused}) => (
    <TabBarIcon
    focused={focused}
    name={Platform.OS === 'ios' ? `ios-medical ${focused ? '' : '-outline'}` : 'md-medical'}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  JournalStack,
  TreatmentStack,
  SettingsStack,
  LinksStack
});
