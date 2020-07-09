import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Label} from '../label/Label';
import {GRAY_NEUTRAL, GRAY_LIGHT} from '../../../styles/colors';

export const SwitchButton = ({label, wrapperStyle}) => (
  <TouchableOpacity style={[styles.switchWrapper, wrapperStyle]}>
    <View style={styles.switchCircle} />
    <Label text={label} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  switchWrapper: {
    borderWidth: 1,
    borderRadius: 16,
    paddingHorizontal: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 2,
    borderColor: GRAY_NEUTRAL,
  },
  switchCircle: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    borderColor: GRAY_LIGHT,
    borderWidth: 1,
    marginRight: 5,
  },
});
