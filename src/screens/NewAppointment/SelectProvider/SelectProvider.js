import React, { useState, useEffect } from 'react';
import { Platform, StatusBar } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, ProvidersList, Provider, Avatar, Name } from './SelectProvider_Styles';

import api from '~/services/api';

export default function SelectProvider({ navigation }) {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('providers');

      setProviders(response.data);
    })();
  }, []);

  return (
    <Container>
      <ProvidersList
        data={providers}
        keyExtractor={provider => String(provider.id)}
        renderItem={({ item: provider }) => (
          <Provider onPress={() => navigation.navigate('SelectDateTime', { provider })}>
            <Avatar
              source={{
                uri: provider.avatar
                  ? provider.avatar.url
                  : `https://ui-avatars.com/api/?background=7159c1&color=fff&name=${provider.name}`,
              }}
            />
            <Name>{provider.name}</Name>
          </Provider>
        )}
      />
    </Container>
  );
}

SelectProvider.navigationOptions = ({ navigation }) => ({
  title: 'Select Your Barber',
  headerStyle: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight + 8 : 0,
  },
  headerLeft: () => (
    <TouchableOpacity>
      <Icon name="chevron-left" size={20} color="#fff" onPress={() => navigation.navigate('Dashboard')} />
    </TouchableOpacity>
  ),
});
