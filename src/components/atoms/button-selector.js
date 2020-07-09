import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BRAND_BLUE, WHITE, GRAY_LIGHT, BLACK} from '../../styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ButtonSelector = ({selected, label, onPress}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.wrapper,
        {
          backgroundColor: selected ? BRAND_BLUE : WHITE,
          borderColor: selected ? BRAND_BLUE : GRAY_LIGHT,
        },
      ]}>
      {selected ? (
        <Icon name="check" color={WHITE} size={24} />
      ) : (
        <Icon name="checkbox-blank-outline" color={GRAY_LIGHT} size={24} />
      )}
      <Text
        style={[
          styles.text,
          {
            color: selected ? WHITE : BLACK,
          },
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonSelector;

const styles = StyleSheet.create({
  wrapper: {
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  text: {
    paddingLeft: 5,
    fontSize: 12,
  },
});
