import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container } from './Dashboard_Styles';
import Background from '~/components/Background';

export default function Dashboard() {
  return (
    <Background>
      <View>
        <Text>Dashboard Component</Text>
      </View>
    </Background>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Schedule',
  tabBarIcon: ({ tintColor }) => <Icon name="event" size={20} color={tintColor} />,
};
