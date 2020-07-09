import React from 'react';
import {StyleSheet, View, TouchableHighlight} from 'react-native';

export const ModalContainer = ({children, onPress}) => (
  <View style={styles.modalOuterContainerStyle}>
    <TouchableHighlight style={styles.modalInnerContainerStyle} onPress={onPress}>
      <View />
    </TouchableHighlight>
    {children}
  </View>
);

const styles = StyleSheet.create({
  modalOuterContainerStyle: {marginTop: 0, flex: 1, flexDirection: 'column-reverse'},
  modalInnerContainerStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flexDirection: 'column-reverse',
  },
});
