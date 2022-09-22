import React, {useState} from 'react';
import { StyleSheet,Image, Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import Tempo from './components/Tempo';
import Api from './components/Api';
// import api from './components/Api';

export default function App() {
    const [dados, setDados] = useState("");
    const [cidade, setCidade] = useState("itu");

    async function buscaCidade(){
      const response = await Api.get(`weather?array_limit=10&fields=only_results,temp,city_name,forecast,max,min,date,description&key=c58f4f95&city_name=${cidade},SP`);
      setDados(response.data.forecast);
    }
  return (
    <View style={styles.container}>
        <View style={styles.conteudo}>

          <View style={styles.blocotitle}>
            <Text style={styles.title}>Previsão do Tempo</Text>
            <Image source={{uri: 'https://cdn-icons-png.flaticon.com/512/3767/3767036.png'}}
            style={{width: 40, height: 40, marginTop: 5,}} />
          </View>

          <View>
            <Text style={styles.subtitle}> Digite sua Cidade:</Text>

            <TextInput 
            style={styles.input}
            placeholder='sua cidade...' placeholderTextColor={'#fff'}
            onChangeText={(value)=>setCidade(value)}
            />
          </View>

          <View style={styles.blocobotao}> 
            <TouchableOpacity style={styles.botao} onPress={buscaCidade}>
              <Text style={styles.botaotext}>Buscar</Text>
            </TouchableOpacity>
          </View>
         
      </View>
      <FlatList 
      style={styles.lista}
          data={dados}
          renderItem={({item})=>{
            return(
            
              <View>
                <Text style={styles.subtitle}>Data: {item.date}</Text>
                <Text style={styles.dadostempo}>Max: {item.max}</Text>
                <Text style={styles.dadostempo}>Min: {item.min}</Text>
                <Text style={styles.dadostempo}>Descrição: {item.description}</Text>
              </View>
            )
          }} 
          />
          {/* <Tempo data={dados}  ahtaaaaaaaaaaaaaaaa/> */}
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
    padding: 5,
    marginVertical:40,
    width: 300,
    borderRadius: 20,

  },

  blocotitle: {
    marginTop: 20,
    marginBottom: 10,
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
    color: '#fff',
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
  },

  dadostempo: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  lista: {
    backgroundColor: '#607EAA',
    width: 300,
    borderRadius: 10,
    marginBottom: 40,
    padding: 5,
  }
});