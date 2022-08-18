import React from 'react';
import { Text, StyleSheet } from 'react-native';

export default function Tempo(props) {
 return (
   <>
    <Text style={styles.texto}>Min: {props.data.min} </Text>
    <Text  style={styles.texto}>Max: {props.data.max}</Text>
    <Text  style={styles.texto}>Descrição: {props.data.description} </Text>
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