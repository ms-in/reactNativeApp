import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {Label} from '../label/Label';
import BizIcon from '../../../bizIcon';
import {GRAY_NEUTRAL, EDIT_ICON_SIZE} from '../../../styles';

const EditButton = ({label = 'Edit', onPress, wrapperStyle, iconName}) => {
  return (
    <TouchableOpacity style={[styles.wrapper, wrapperStyle]} onPress={onPress}>
      <Label text={label} style={styles.editText} />
      <BizIcon
        name={iconName}
        size={EDIT_ICON_SIZE}
        color={GRAY_NEUTRAL}
        style={[styles.headerIconStyle]}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export {EditButton};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editText: {
    color: GRAY_NEUTRAL,
    marginRight: 5,
  },
  cirlce: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    borderWidth: 1,
    borderColor: '#B7BCBF',
  },
});
