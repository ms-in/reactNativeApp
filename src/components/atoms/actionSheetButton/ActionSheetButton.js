import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import BizIcon from '../../../bizIcon';
import {PRIMARY, WHITE, ACTION_SHEET_BUTTON_ICON_SIZE} from '../../../styles';

export const ActionSheetButton = (props) => {
  const {textStyle} = styles;
  const {onPress, label, iconName} = props;
  return (
    <TouchableOpacity onPress={onPress} style={[styles.buttonStyle]} activeOpacity={0.8}>
      <BizIcon
        name={iconName}
        size={ACTION_SHEET_BUTTON_ICON_SIZE}
        color={WHITE}
        style={[styles.headerIconStyle]}
        resizeMode="contain"
      />
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: PRIMARY,
    borderRadius: 30,
    padding: 5,
    position: 'absolute',
    bottom: 16,
    zIndex: 999,
    paddingHorizontal: 8,
    // height: 40,
  },
  headerIconStyle: {
    width: 25,
    height: 25,
    alignSelf: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginTop: 10,
  },
};
