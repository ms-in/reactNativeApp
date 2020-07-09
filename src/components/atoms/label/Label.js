import React from 'react';
import {Text} from 'react-native';
import {fontSize} from '../../../styles';

export const Label = (props) => {
  const {text, customStyle} = props;
  let newText = text !== undefined && text !== null ? text : ' ';
  return (
    <Text style={[styles.labelStyle, customStyle]} {...props}>
      {newText}
    </Text>
  );
};

const styles = {
  labelStyle: {
    lineHeight: fontSize(16),
    fontSize: fontSize(12),
    marginVertical: 2,
    marginHorizontal: 2,
  },
};
