/**
 * @format
 */
import { AppRegistry } from 'react-native';
import Root from './source';
import { name as appName } from './app.json';

import './source/i18n';

AppRegistry.registerComponent(appName, () => Root);
