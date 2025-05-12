import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const imagen1 = { uri: 'https://www.allaboutbirds.org/guide/assets/photo/308074121-1900px.jpg' };
const imagenFondo = { uri: 'https://marketplace.canva.com/EAFicYgl5eI/1/0/900w/canva-fondo-de-pantalla-para-tel%C3%A9fono-floral-org%C3%A1nico-rosa-pKfl8ntjjp0.jpg' };

export default function App() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ImageBackground source={imagenFondo} resizeMode='cover' style={styles.imagenFondo}>
        <Text style={styles.texto}>Login App Montenegro - Lucero</Text>
        <Image source={imagen1} style={styles.imagen1} />
        <TextInput
          placeholder="Ingrese su nombre de usuario"
          style={styles.input}
        />
        <View style={styles.passwordContainer}>
          <TextInput
            placeholder="Ingresar contraseña"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            style={[styles.input, { flex: 1 }]}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons
              name={showPassword ? 'eye-off' : 'eye'}
              size={24}
              color="gray"
              style={{ marginLeft: 10 }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.loginButton}
          onPress={() => alert('¡Registrado!')}>
          <Text style={styles.loginButtonText}>Ingresar</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  texto: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 15,
  },
  imagenFondo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  imagen1: {
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
    backgroundColor: 'white',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 15,
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 10,
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
