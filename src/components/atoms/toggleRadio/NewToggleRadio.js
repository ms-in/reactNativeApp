/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View, Text, TouchableWithoutFeedback} from 'react-native';
import {
  GRAY_DARK,
  GRAY_MEDIUM,
  GRAY_LIGHT,
  BRAND_BLUE,
  WHITE,
} from '../../../styles/colors';
import {wp} from '../../../styles';
import _ from 'lodash';

export class NewToggleRadio extends Component {
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
      height: this.props.size,
      width: this.props.size,
      borderRadius: this.props.size / 2,
      borderWidth: this.props.thickness,
      borderColor: this.props.isSelected ? BRAND_BLUE : GRAY_LIGHT,
    };
  }

  getRadioDotStyle() {
    return {
      height: this.props.size / 2,
      width: this.props.size / 2,
      borderRadius: this.props.size / 4,
      backgroundColor: WHITE,
    };
  }
  getTextStyle() {
    return {
      color: this.props.isSelected ? WHITE : GRAY_DARK,
    };
  }
  isSelected() {
    if (this.props.isSelected) {
      return <View style={this.getRadioDotStyle()} />;
    }
  }
  render() {
    const {text, disabled, onSelect, value, index, style, isSelected} = this.props;
    return (
      <View style={{opacity: disabled ? 0.4 : 1}}>
        <TouchableWithoutFeedback
          disabled={disabled}
          onPress={() => onSelect(index, value)}>
          <View
            style={[
              styles.container,
              style,
              isSelected
                ? {backgroundColor: BRAND_BLUE, borderColor: BRAND_BLUE}
                : {backgroundColor: WHITE},
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

NewToggleRadio.propTypes = {
  onSelect: PropTypes.func.isRequired,
  size: PropTypes.number.isRequired,
  thickness: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
  highlightColor: PropTypes.string,
};
NewToggleRadio.defaultProps = {
  size: 24,
  thickness: 1,
  color: WHITE,
  highlightColor: BRAND_BLUE,
  borderColor: BRAND_BLUE,
  onSelect: _.noop(),
};
let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 4,
    borderWidth: 1,
    borderColor: GRAY_MEDIUM,
    borderRadius: 16,
    backgroundColor: WHITE,
    paddingHorizontal: 5,
    paddingRight: 10,
    minWidth: wp(22),
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
