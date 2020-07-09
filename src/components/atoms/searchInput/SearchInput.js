import React from 'react';
import {TextInput} from 'react-native';

export const SearchInput = (props) => {
  return (
    <TextInput
      {...props}
      style={[styles.inputStyle, props.customStyle]}
      placeholder="Search... "
    />
  );
};

const styles = {
  inputStyle: {
    alignSelf: 'flex-start',
    color: '#fff',
    fontSize: 14,
    fontFamily: 'OpenSans-Bold',
  },
};
