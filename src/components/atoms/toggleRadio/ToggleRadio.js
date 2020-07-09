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
import {fontSize,hp} from '../../../styles';

export default class ToggleRadio extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectedIndex: nextProps.selectedIndex,
    });
  }

  getRadioStyle() {
    const size = this.context.size || 24;
    const thickness = this.context.thickness || 1;

    // onSelect: () => {},
    //   size: 24,
    //   thickness: 1,
    //   color: WHITE,
    //   highlightColor: BRAND_BLUE,
    //   borderColor: BRAND_BLUE,
    return {
      height: size / 1.5,
      width: size / 1.5,
      borderRadius: size / 3,
      borderWidth: thickness,
      borderColor: this.props.isSelected ? BRAND_BLUE : GRAY_LIGHT,
    };
  }

  getRadioDotStyle() {
    const size = this.context.size || 24;
    return {
      height: size / 2.5,
      width: size / 2.5,
      borderRadius: size / 5,
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
    var {text, wrapperStyle, toggleSize} = this.props;
    return (
      <View style={[wrapperStyle]}>
        <TouchableWithoutFeedback
          disabled={this.props.disabled}
          onPress={() =>
            this.context.onSelect
              ? this.context.onSelect(this.props.index, this.props.value)
              : {}
          }>
          <View
            style={[
              styles.container,
              this.props.style,
              this.props.isSelected
                ? {backgroundColor: BRAND_BLUE, borderColor: BRAND_BLUE}
                : {backgroundColor: WHITE},
              toggleSize,
            ]}>
            <View style={[styles.radio, this.getRadioStyle()]}>{this.isSelected()}</View>
            <View style={styles.item}>
              {!this.props.size ? (
                <Text style={[styles.text, this.getTextStyle()]}>{text}</Text>
              ) : (
                <Text style={[this.getTextStyle()]}>{text}</Text>
              )}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}
ToggleRadio.contextTypes = {
  onSelect: PropTypes.func,
  size: PropTypes.number,
  thickness: PropTypes.number,
  color: PropTypes.string,
  borderColor: PropTypes.string,
  highlightColor: PropTypes.string,
};

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 4,
    paddingVertical: 4,
    borderWidth: 1,
    borderColor: GRAY_MEDIUM,
    borderRadius: hp(16),
    backgroundColor: WHITE,
    paddingRight: 12,
  },
  radio: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {fontSize: fontSize(12)},
  item: {
    marginLeft: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
