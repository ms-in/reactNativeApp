import React from 'react';
import {View} from 'react-native';
import {GRAY_MEDIUM} from '../../../styles';

export const Divider = ({style}) => {
  return <View style={[styles.divider, style]} />;
};

const styles = {
  divider: {
    height: 1,
    backgroundColor: GRAY_MEDIUM,
    borderColor: GRAY_MEDIUM,
    marginVertical: 5,
  },
};
