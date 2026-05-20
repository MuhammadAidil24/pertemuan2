import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';

import Card from './src/components/Card';

import CustomInput from './src/components/CustomInput';

import CustomButton from './src/components/CustomButton';

export default function App() {
  const [nama, setNama] = useState('');

  const [password, setPassword] =
    useState('');

  const handleLogin = () => {
    Alert.alert(
      'Login Berhasil',
      `Selamat datang ${nama}`
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle="light-content"
      />

      <Card>
        <Text style={styles.title}>
          React Native Login UI
        </Text>

        <CustomInput
          label="NAMA"
          icon="person-outline"
          placeholder="Masukkan nama"
          value={nama}
          onChangeText={setNama}
        />

        <CustomInput
          label="PASSWORD"
          icon="lock-closed-outline"
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

    backgroundColor: '#0F2B5B',

    justifyContent: 'center',

    padding: 24,
  },

  title: {
    fontSize: 32,

    fontWeight: '700',

    color: '#1F2A44',

    textAlign: 'center',

    marginBottom: 24,
  },
});