import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Label} from '../label/Label';
import {FONT_REGULAR, fontSize, GRAY_NEUTRAL, GENERAL_ICON_SIZE} from '../../../styles';
import BizIcon from '../../../bizIcon';

export const IconWithLeftLabel = ({
  icon,
  onPress,
  customStyle,
  label,
  iconName,
  iconColor,
  testID,
}) => (
  <TouchableOpacity
    onPress={onPress}
    hitSlop={styles.hitSlop}
    style={styles.iconContainer}
    testID={testID}>
    <Label text={label} customStyle={styles.labelStyle} />
    <BizIcon
      name={iconName}
      size={GENERAL_ICON_SIZE}
      color={iconColor}
      resizeMode="contain"
    />
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
    marginRight: 5,
  },
});

IconWithLeftLabel.prototype = {
  icon: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  customStyle: PropTypes.object,
  label: PropTypes.string,
};
