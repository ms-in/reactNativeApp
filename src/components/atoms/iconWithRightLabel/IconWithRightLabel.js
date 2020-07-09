import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Label} from '../label/Label';
import {FONT_REGULAR, fontSize, GRAY_NEUTRAL, GENERAL_ICON_SIZE} from '../../../styles';
import BizIcon from '../../../bizIcon';

export const IconWithRightLabel = ({
  icon,
  onPress,
  iconCustomStyle,
  label,
  labelCustomStyle,
  iconName,
  iconColor,
}) => (
  <TouchableOpacity
    onPress={onPress}
    hitSlop={styles.hitSlop}
    style={styles.iconContainer}>
    <BizIcon
      name={iconName}
      size={GENERAL_ICON_SIZE}
      color={iconColor}
      style={[iconCustomStyle]}
      resizeMode="contain"
    />
    <Label text={label} customStyle={[styles.labelStyle, labelCustomStyle]} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  headerIconStyle: {width: 25, height: 25, marginHorizontal: 0},
  hitSlop: {top: 5, left: 5, bottom: 5, right: 5},
  iconContainer: {flexDirection: 'row', alignItems: 'center'},
  labelStyle: {
    fontSize: fontSize(12),
    lineHeight: fontSize(16),
    color: GRAY_NEUTRAL,
    ...FONT_REGULAR,
    marginLeft: 5,
  },
});

IconWithRightLabel.prototype = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  iconCustomStyle: PropTypes.object,
  labelCustomStyle: PropTypes.object,
  label: PropTypes.string,
};
