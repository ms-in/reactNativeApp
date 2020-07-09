import React from 'react';
import {TouchableOpacity, StyleSheet, View} from 'react-native';
import {Label} from '../label/Label';
import {GRAY_NEUTRAL, PRIMARY} from '../../../styles/colors';

export const FieldLink = ({label, onPress}) => (
  <TouchableOpacity style={styles.fieldLinkWrapper} onPress={onPress}>
    <View style={styles.fieldLinkCircle} />
    <Label text={label} style={styles.fieldLinkLabel} onPress={onPress} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  fieldLinkWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fieldLinkCircle: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    borderWidth: 1,
    borderColor: GRAY_NEUTRAL,
  },
  fieldLinkLabel: {
    color: PRIMARY,
    fontSize: 12,
    flex: 1,
    paddingHorizontal: 5,
  },
});
