import React from 'react';

import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
}

const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
}) => {
  const getBackground = () => {
    switch (variant) {
      case 'secondary':
        return '#10B981';

      case 'danger':
        return '#FF2D55';

      default:
        return '#7861FF';
    }
  };

  const getIcon = () => {
    switch (variant) {
      case 'secondary':
        return 'person-add-outline';

      case 'danger':
        return 'trash-outline';

      default:
        return 'log-in-outline';
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={onPress}
      style={[
        styles.button,
        {
          backgroundColor: getBackground(),
        },
      ]}
    >
      <Ionicons
        name={getIcon() as any}
        size={20}
        color="#fff"
        style={{ marginRight: 10 }}
      />

      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',

    alignItems: 'center',

    justifyContent: 'center',

    paddingVertical: 16,

    borderRadius: 18,

    marginTop: 14,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.08,

    shadowRadius: 12,

    elevation: 4,
  },

  text: {
    color: '#fff',

    fontSize: 18,

    fontWeight: '700',
  },
});

export default CustomButton;