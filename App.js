import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, ImageBackground} from 'react-native';

const imagen1 = {uri: 'https://www.allaboutbirds.org/guide/assets/photo/308074121-1900px.jpg?__hstc=6989805.2f3f33a24b44870ec4a577029c49e44b.1746057600118.1746057600119.1746057600120.1&__hssc=6989805.1.1746057600121&__hsfp=1721781979'}
const imagenFondo = {uri: 'https://marketplace.canva.com/EAFicYgl5eI/1/0/900w/canva-fondo-de-pantalla-para-tel%C3%A9fono-floral-org%C3%A1nico-rosa-pKfl8ntjjp0.jpg'}
export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground
      source={imagenFondo}
      resizeMode='cover'
      style = {styles.imagenFondo}> 
      <Text style = {styles.texto}> Login App Montenegro - Lucero</Text>
      <Image
      source={imagen1}
      style = {styles.imagen1}> 
      </Image>
      <TextInput
        placeholder= "Ingrese su nombre de usuario"
        source= "name"
        style={styles.input }  />
        <TextInput
        placeholder= "Ingrese su contraseña"
        style={styles.input } />
        <Button
        title="Ingresar"
        onPress={() => alert('¡Registrado!')}/>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  texto: {
    fontSize: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  imagenFondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center', 
    height: '100%',
    width: '100%',
  },
  imagen1: {
    flex: 0, 
    height: 150, 
    width: 150,  
    marginBottom: 20, 
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    width: '80%',
    paddingLeft: 10,
  },
});
