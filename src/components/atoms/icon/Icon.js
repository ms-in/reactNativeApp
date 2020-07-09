import React from 'react';
import PropTypes from 'prop-types';
import {Image, TouchableOpacity, StyleSheet} from 'react-native';
import placeholderIcon from '../../../assets/images/placeholderIcon.png'
//import placeholderIcon from '_assets/images/placeholderIcon.png';
export const Icon = ({icon, onPress, customStyle}) => (
  <TouchableOpacity onPress={onPress} hitSlop={styles.hitSlop}>
    <Image
      source={icon}
      resizeMode="contain"
      style={[styles.headerIconStyle, customStyle]}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  headerIconStyle: {width: 25, height: 25, marginHorizontal: 0},
  hitSlop: {top: 5, left: 5, bottom: 5, right: 5},
});

Icon.defaultProps = {
  icon: placeholderIcon,
};

Icon.prototype = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  customStyle: PropTypes.object,
};
