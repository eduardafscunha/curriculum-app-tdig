import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Avatar from './components/Avatar';
import SocialNetworks from './components/SocialNetworks';
import CardItem from './components/CardItem/index';
import styles from './styles';
const photo = require('./photo.jpeg');

const App = () => {
  return (
    <SafeAreaProvider style={styles.page}>
      <Avatar photo={photo} name="Eduarda Cunha" role="Test Engineer" />
      <SocialNetworks />
      <CardItem title="Objetivo">
        <Text style={{ color: '#939393' }}>Promoção</Text>
      </CardItem>
      <CardItem title="Formação Acadêmica">
        <Text style={{ color: '#939393' }}>
          Graduação em Ciência da Computação
        </Text>
      </CardItem>
      <CardItem title="Experiência Profissional">
        <Text style={{ color: '#939393' }}>Talent Training (QA) (4 meses) - PayGo</Text>
        <Text style={{ color: '#939393' }}>Test Engineer Jr. (7 meses) - Coteminas</Text>
      </CardItem>
    </SafeAreaProvider>
  );
};

export default App;
