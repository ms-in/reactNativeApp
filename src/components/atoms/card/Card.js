import React from 'react';
import {View} from 'react-native';
import {WHITE} from '../../../styles';

export const Card = ({children, customStyle = {}}) => {
  return <View style={[styles.cardContainerStyle, customStyle]}>{children}</View>;
};

export const RectangleCard = ({children, customStyle}) => {
  return (
    <View style={[styles.rectangleCardContainerStyle, customStyle]}>{children}</View>
  );
};

const styles = {
  cardContainerStyle: {
    boarderWidth: 4,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 10,
    marginVertical: 8,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: WHITE,
  },
  rectangleCardContainerStyle: {
    shadowColor: '#000',
    shadowOpacity: 0.8,
    elevation: 5,
    marginVertical: 4,
    marginHorizontal: 8,
    backgroundColor: WHITE,
  },
};
