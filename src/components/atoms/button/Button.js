import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

import {BRAND_BLUE, WHITE, PRIMARY} from '../../../styles';

export const Button = (props) => {
  const {buttonStyle, textStyle} = styles;
  const {onPress, label, style, customTextStyle, disabled, onError, testID} = props;
  return (
    <TouchableOpacity
      onPress={disabled ? onError : onPress}
      style={[buttonStyle, style]}
      activeOpacity={0.8}
      testID={testID}>
      <Text style={[textStyle, customTextStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const ButtonIcon = (props) => {
  const {icon, iconColor} = props;
  return (
    <Icon
      name={icon ? icon : 'error_outline'}
      size={30}
      color={iconColor ? iconColor : PRIMARY}
    />
  );
};
export const BorderedButton = (props) => {
  const {onPress, label, icon, iconColor, style} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.borderedButtonStyle, style]}
      activeOpacity={0.8}>
      {icon ? <ButtonIcon icon={icon} iconColor={iconColor} /> : null}
      <Text style={styles.borderedButtonText}>{label}</Text>
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
    // flexGrow: 1,
    height: 48,
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: BRAND_BLUE,
    marginVertical: 10,
    borderRadius: 8,
  },
  borderedButtonStyle: {
    backgroundColor: WHITE,
    borderWidth: 1,
    borderColor: PRIMARY,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 8,
    paddingVertical: 12,
  },
  borderedButtonText: {
    alignSelf: 'center',
    fontFamily: 'OpenSans-Bold',
    fontSize: 12,
    lineHeight: 16,
    color: PRIMARY,
  },
};
