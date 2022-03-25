import React from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import styles from './styles';

const CardItem = ({title, children}) => (
  <Card styles={styles.card}>
    <View>
      <Text styles={styles.title}>{title}</Text>
    </View>
    <View style={styles.content}>
      {children}
    </View>
  </Card>
);

export default CardItem;