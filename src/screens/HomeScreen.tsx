import { RootStackParamList } from 'navigation/types';
import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styles from '../styles/HomeStyles';

type Props = NativeStackScreenProps<RootStackParamList, 'Inicio'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Tareas')}>
      <Text style={styles.buttonText}>Tareas</Text>
    </TouchableOpacity>
    <View style={styles.spacer} />
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Listado')}>
      <Text style={styles.buttonText}>Lista Api</Text>
    </TouchableOpacity>
  </View>
);

export default HomeScreen;
