import memoize from 'lodash.memoize';
import {scaleFont} from './mixins';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'OpenSans-Regular';
export const FONT_FAMILY_SEMI_BOLD = 'OpenSans-SemiBold';
export const FONT_FAMILY_BOLD = 'OpenSans-Bold';

// FONT WEIGHT
export const FONT_WEIGHT_REGULAR = '400';
export const FONT_WEIGHT_SEMI_BOLD = '600';
export const FONT_WEIGHT_BOLD = '700';

// FONT SIZE
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = memoize(() => scaleFont(12));
export const fontSize = memoize((size) => scaleFont(size));

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
//export const LINE_HEIGHT_16 = memoize(scaleFont(16));
export const lineHeight = (size) => scaleFont(size);

// FONT STYLE
export const FONT_REGULAR = {
  fontFamily: FONT_FAMILY_REGULAR,
  fontWeight: FONT_WEIGHT_REGULAR,
};

export const FONT_SEMI_BOLD = {
  fontFamily: FONT_FAMILY_SEMI_BOLD,
  fontWeight: FONT_WEIGHT_SEMI_BOLD,
};
export const FONT_BOLD = {
  fontFamily: FONT_FAMILY_BOLD,
  fontWeight: FONT_WEIGHT_BOLD,
};
