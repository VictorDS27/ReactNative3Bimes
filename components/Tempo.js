import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Tempo() {
 return (
   <>
    <Text style={styles.texto}>Min: </Text>
    <Text  style={styles.texto}>Max: </Text>
    <Text  style={styles.texto}>Descrição: </Text>
   </>
  );
}

const styles = StyleSheet.create({
    texto: {
        color: '#EAE3D2',

        fontSize: 20, 
        fontWeight: 'bold' 
    },
  });