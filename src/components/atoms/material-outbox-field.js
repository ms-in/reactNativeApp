import React, {Component} from 'react';
import {OutlinedTextField} from 'react-native-material-textfield';
import {View, StyleSheet} from 'react-native';
import {Label} from './label/Label';
//import {Label} from '../../components/atoms/label/Label';
import {fontSize, FONT_REGULAR, GRAY_NEUTRAL} from '../../styles';

export class InputTextBoxField extends Component {
  componentDidUpdate() {
    const {fieldValue} = this.props;
    this.fieldValue.setValue(fieldValue);
  }

  onChanged(input, text) {
    const {change, isNumeric} = this.props;
    if (isNumeric) {
      const newText = text.replace(/[^0-9]/g, '');
      this.fieldValue.setValue(newText);
      change(input, newText);
    } else {
      change(input, text);
    }
  }

  render() {
    const {
      title,
      keyboardType,
      input,
      containerStyle,
      multiline,
      fieldValue,
      autoFocus,
      ...rest
    } = this.props;
    return (
      <View style={styles.containerViewStyle}>
        <Label text={title} customStyle={styles.labelStyle} />
        <OutlinedTextField
          // label={title}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          containerStyle={containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          onChangeText={(text) => this.onChanged(input.name, text)}
          multiline={multiline}
          value={fieldValue}
          // height={104}
          ref={(ref) => {
            this.fieldValue = ref;
          }}
          {...rest}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  containerViewStyle: {
    marginTop: 16,
  },
  labelStyle: {
    fontSize: fontSize(12),
    lineHeight: fontSize(16),
    color: GRAY_NEUTRAL,
    ...FONT_REGULAR,
  },
  inputContainerStyle: {
    marginBottom: -36,
    top: -16,
  },
});
