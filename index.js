/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Calculator from './srcApp/Calculator';
import DuDoanSoXo from './srcApp/DuDoanSoXo';
import flexBox from './srcApp/flexBox';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './srcApp/stackNavigation/Screen1';
import Screen2 from './srcApp/stackNavigation/Screen2';

const Stack = createNativeStackNavigator();

AppRegistry.registerComponent(appName, () => (
    () => (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen2" component={Screen2} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  ));
  
