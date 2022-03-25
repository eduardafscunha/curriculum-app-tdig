import * as React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './styles'

const Avatar = ({name, photo, role}) => (
  <View style={styles.header}>
    <Image source={photo} style={styles.avatar} />
    <Text style={styles.name}>{name}</Text>
    <Text style={styles.role}>{role}</Text>
  </View>
);

export default Avatar;