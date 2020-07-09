import React from 'react';
import {TouchableOpacity} from 'react-native';
import {WHITE} from '../../../styles';

export const Tile = ({children, customStyle, onPress}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={[styles.titleContainerStyle, customStyle]}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

const styles = {
  titleContainerStyle: {
    backgroundColor: WHITE,
    boarderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius: 10,
    padding: 10,
    flex: 1,
  },
};
