import React, {Component} from 'react';
import {TextField} from 'react-native-material-textfield';
export class DecimalInput extends Component {
  constructor() {
    super();
    this.state = {
      decimalValue: '',
    };
  }
  componentDidUpdate(prevProps) {
    if (prevProps.fieldValue !== this.props.fieldValue) {
      this.fieldValue.setValue(this.props.fieldValue);
    }
  }
  onChanged(input, value) {
    const {change} = this.props;
    const {decimalValue} = this.state;
    if (value.match(/^\d{1,}(\.\d{0,2})?$/) || value === '') {
      change(input, value);
      this.fieldValue.setValue(value);
      this.setState({
        decimalValue: value,
      });
    } else {
      change(input, decimalValue);
      this.fieldValue.setValue(decimalValue);
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
      change,
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
