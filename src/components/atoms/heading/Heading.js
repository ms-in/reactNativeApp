import React from 'react';
import {Text} from 'react-native';
import {GRAY_DARK} from '../../../styles';

export const HeadingOne = ({style, text, ...props}) => (
  <Text style={[styles.HeadingOne, style]} {...props}>
    {' '}
    {text}{' '}
  </Text>
);
export const HeadingTwo = ({style, text, ...props}) => (
  <Text style={[styles.HeadingTwo, style]} {...props}>
    {' '}
    {text}{' '}
  </Text>
);

const styles = {
  HeadingOne: {
    color: GRAY_DARK,
    textAlign: 'left',
    textAlignVertical: 'center',
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 22,
  },
  HeadingTwo: {
    color: GRAY_DARK,
    textAlign: 'left',
    textAlignVertical: 'center',
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
    lineHeight: 16,
  },
};
