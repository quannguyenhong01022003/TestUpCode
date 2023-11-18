/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Calculator from './srcApp/Calculator';
import DuDoanSoXo from './srcApp/DuDoanSoXo';


AppRegistry.registerComponent(appName, () => DuDoanSoXo);
