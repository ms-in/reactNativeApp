import React from 'react';
import {View} from 'react-native';
import {WHITE} from '../../../styles';

export const Section = ({children, customStyle, testID}) => (
  <View style={[styles.sectionContainerStyle, customStyle]} testID={testID}>
    {children}
  </View>
);
const styles = {
  sectionContainerStyle: {
    marginBottom: 8,
    boarderWidth: 4,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#575757',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    backgroundColor: WHITE,
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
};
