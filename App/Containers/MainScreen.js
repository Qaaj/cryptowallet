import React from 'react'

import {Platform} from 'react-native';
import {TabNavigator} from 'react-navigation';
import {Colors} from './../Themes'

import MainTab from './Tabs/MainTab.js'
import SettingsTab from './Tabs/SettingsTab.js'
import PortfolioTab from './Tabs/PortfolioTab.js'

const SimpleTabs = TabNavigator(
  {
    Home: {
      screen: MainTab,
      path: '',
    },
    Portfolio: {
      screen: PortfolioTab,
      path: 'portfolio',
    },
    Settings: {
      screen: SettingsTab,
      path: 'settings',
    },
  },
  {
    tabBarOptions: {
      activeTintColor: Platform.OS === 'ios' ? Colors.facebar : '#fff',
    },
  }
);


export default SimpleTabs
