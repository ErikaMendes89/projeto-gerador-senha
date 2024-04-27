import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import uuid from 'uuid-random';

export default function App() {
  const [senha, setSenha] = useState('');

  const gerarSenha = () => {
  const letrasMaiusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const letrasMinusculas = 'abcdefghijklmnopqrstuvwxyz';
  const numeros = '0123456789';
  const caracteresEspeciais = '!@#$%^&*_';
  
  let novaSenha = '';
  
  // Adiciona um caractere de cada tipo
  novaSenha += letrasMaiusculas.charAt(Math.floor(Math.random() * letrasMaiusculas.length));
  novaSenha += letrasMinusculas.charAt(Math.floor(Math.random() * letrasMinusculas.length));
  novaSenha += numeros.charAt(Math.floor(Math.random() * numeros.length));
  novaSenha += caracteresEspeciais.charAt(Math.floor(Math.random() * caracteresEspeciais.length));
  
  // Preenche o restante da senha com caracteres aleatórios
  const todosCaracteres = letrasMaiusculas + letrasMinusculas + numeros + caracteresEspeciais;
  for (let i = 0; i < 8; i++) {
    novaSenha += todosCaracteres.charAt(Math.floor(Math.random() * todosCaracteres.length));
  }
  
  // Embaralha a senha
  novaSenha = novaSenha.split('').sort(() => Math.random() - 0.5).join('');
  
  setSenha(novaSenha);
};

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#000000', '#6A0DAD']}
        style={styles.background}
      />
      <Text style={styles.label}>Sua Senha:</Text>
      <Text style={styles.senha}>{senha}</Text>
      <TouchableOpacity style={styles.botao} onPress={gerarSenha}>
        <Text style={styles.textoBotao}>Gerar Senha</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  label: {
    fontSize: 24,
    color: '#FFF',
    marginBottom: 20,
  },
  senha: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
    marginBottom: 40,
  },
  botao: {
    backgroundColor: '#6A0DAD',
    borderWidth: 3,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  textoBotao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});