import React, { useState } from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

interface CustomInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  icon: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  icon,
}) => {
  const [isFocused, setIsFocused] =
    useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        {label}
      </Text>

      <View
        style={[
          styles.inputWrapper,
          isFocused && styles.inputFocused,
        ]}
      >
        <Ionicons
          name={icon as any}
          size={20}
          color="#7861FF"
          style={styles.icon}
        />

        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#A0A0A0"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },

  label: {
    fontSize: 13,

    fontWeight: '600',

    color: '#7861FF',

    marginBottom: 6,

    letterSpacing: 0.5,
  },

  inputWrapper: {
    flexDirection: 'row',

    alignItems: 'center',

    backgroundColor: '#F6F6FF',

    borderWidth: 1.5,

    borderColor: '#E5E7FF',

    borderRadius: 14,

    paddingHorizontal: 14,
  },

  inputFocused: {
    borderColor: '#7861FF',

    backgroundColor: '#FFFFFF',
  },

  icon: {
    marginRight: 12,
  },

  input: {
    flex: 1,

    paddingVertical: 14,

    fontSize: 15,

    color: '#1F2A44',
  },
});

export default CustomInput;