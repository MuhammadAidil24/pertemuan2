import React from 'react';

import {
  View,
  StyleSheet,
} from 'react-native';

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  children,
}) => {
  return (
    <View style={styles.card}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',

    borderRadius: 24,

    padding: 24,

    shadowColor: '#000',

    shadowOffset: {
      width: 0,
      height: 6,
    },

    shadowOpacity: 0.08,

    shadowRadius: 12,

    elevation: 6,
  },
});

export default Card;