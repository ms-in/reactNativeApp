import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export const IconComponent = ({icoName, onPress, ...rest}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.pH20}>
      <Icon name={icoName} size={30} {...rest} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  pH20: {
    paddingVertical: 10,
  },
});
