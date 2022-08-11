import { React } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Tempo from './components/Tempo';
// import api from './components/Api';

export default function App() {
  return (
    <View style={styles.container}>
        <View style={styles.conteudo}>

          <View style={styles.blocotitle}>
            <Text style={styles.title}>Previsão do Tempo</Text>
          </View>

          <View>
            <Text style={styles.subtitle}> Digite sua Cidade:</Text>

            <TextInput 
            style={styles.input}
            placeholder='sua cidade...' placeholderTextColor={'#fff'}/>
          </View>

          <View style={styles.blocobotao}> 
            <TouchableOpacity style={styles.botao}>
              <Text style={styles.botaotext}>Buscar</Text>
            </TouchableOpacity>
          </View>
          <Tempo />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1C3879',
    justifyContent: 'center',
    alignItems: 'center'
  },

  conteudo: {
    backgroundColor: '#607EAA',
    padding: 10,
    width: 300,
    borderRadius: 10,
  },

  blocotitle: {
    marginTop: 20,
    marginBottom: 30,
    alignItems: 'center'
  },

  title: {
    color: '#EAE3D2',

    fontSize: 30, 
    fontWeight: 'bold' 
  }, 
 
  subtitle: { 
  fontSize: 15,
  fontWeight: '900',
  color: '#EAE3D2', 
  marginBottom: 10,
  }, 

  input: {
    paddingStart: 5,
    width: '100%' ,
    borderBottomWidth: 2,
    borderTopEndRadius: 5,
    borderTopStartRadius: 5,
    backgroundColor: '#1C3879',
    color: '#000',
  },

  blocobotao: {
    padding: 20,
    alignItems: 'center',

  },

  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 40,
    backgroundColor: '#1C3879',
    borderRadius: 10,
  },

  botaotext: {
    color: '#607EAA',
    fontSize: 15,
    fontWeight: '900',
  }
});
