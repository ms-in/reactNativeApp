/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import {GRAY_DARK} from '../../../styles/colors';
export default class RadioButton extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedIndex: nextProps.selectedIndex,
    });
  }

  getRadioStyle() {
    return {
      height: this.context.size,
      width: this.context.size,
      borderRadius: this.context.size / 2,
      borderWidth: this.context.thickness,
      borderColor:
        this.props.isSelected && this.props.activeColor
          ? this.props.activeColor
          : this.props.borderColor,
    };
  }

  getRadioDotStyle() {
    return {
      height: this.context.size / 2,
      width: this.context.size / 2,
      borderRadius: this.context.size / 4,
      backgroundColor: this.props.color || this.props.activeColor,
    };
  }
  getTextStyle() {
    return {
      color:
        this.props.isSelected && this.props.activeColor
          ? this.props.activeColor
          : GRAY_DARK,
    };
  }
  isSelected() {
    if (this.props.isSelected) {
      return <View style={this.getRadioDotStyle()} />;
    }
  }
  render() {
    var {text} = this.props;
    return (
      <View style={{opacity: this.props.disabled ? 0.4 : 1}}>
        <TouchableWithoutFeedback
          disabled={this.props.disabled}
          onPress={() => this.context.onSelect(this.props.index, this.props.value)}>
          <View
            style={[
              styles.container,
              this.props.style,
              this.props.isSelected
                ? {backgroundColor: this.context.highlightColor}
                : null,
            ]}>
            <View style={[styles.radio, this.getRadioStyle()]}>{this.isSelected()}</View>
            <View style={styles.item}>
              <Text style={[this.getTextStyle()]}>{text}</Text>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

RadioButton.contextTypes = {
  onSelect: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
  highlightColor: PropTypes.string,
};

let styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexDirection: 'row',
    padding: 8,
  },
  radio: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
