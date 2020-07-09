import React, {Component} from 'react';
import {TextField} from 'react-native-material-textfield';

export class InputField extends Component {
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
      <TextField
        label={title}
        keyboardType={keyboardType}
        autoFocus={autoFocus}
        containerStyle={containerStyle}
        onChangeText={(text) => this.onChanged(input.name, text)}
        multiline={multiline}
        value={fieldValue}
        ref={(ref) => {
          this.fieldValue = ref;
        }}
        {...rest}
      />
    );
  }
}
