import React, { useState } from 'react';

import {
  View,
  StyleSheet,
  Alert,
  Text,
} from 'react-native';

import Card from './src/components/Card';
import CustomButton from './src/components/CustomButton';
import CustomInput from './src/components/CustomInput';

export default function App() {
  const [nama, setNama] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert(
      'Login Berhasil',
      `Selamat datang ${nama}`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        React Native Login UI
      </Text>

      <Card>
        <CustomInput
          label="Nama"
          placeholder="Masukkan nama"
          value={nama}
          onChangeText={setNama}
        />

        <CustomInput
          label="Password"
          placeholder="Masukkan password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />

        <CustomButton
          title="Login"
          onPress={handleLogin}
        />

        <CustomButton
          title="Register"
          variant="secondary"
          onPress={() =>
            Alert.alert('Menu Register')
          }
        />

        <CustomButton
          title="Delete"
          variant="danger"
          onPress={() =>
            Alert.alert('Data Dihapus')
          }
        />
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f5',
    justifyContent: 'center',
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#222',
  },
});