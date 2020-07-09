import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IconComponent} from '../icon-component';
import {Label} from '../label/Label';
import {BRAND_BLUE, GRAY_MEDIUM} from '../../../styles/colors';

export const CheckBoxWithLabel = ({onPress, selected, title, labelStyle}) => {
  return (
    <View style={styles.wrapper}>
      <IconComponent
        color={selected ? BRAND_BLUE : GRAY_MEDIUM}
        icoName={selected ? 'checkbox-marked' : 'checkbox-blank-outline'}
        onPress={() => onPress(!selected)}
      />
      <Label text={title} style={[styles.label, labelStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    paddingLeft: 5,
  },
});
