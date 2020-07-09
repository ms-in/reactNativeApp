import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from './selection.json';

export const getIconNames = () => icoMoonConfig.icons.map((item) => item.properties.name);

export default createIconSetFromIcoMoon(icoMoonConfig);
