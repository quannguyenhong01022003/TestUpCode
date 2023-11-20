/**
 * @format
 */

import {AppRegistry, Image} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Calculator from './srcApp/Calculator';
import DuDoanSoXo from './srcApp/DuDoanSoXo';
import flexBox from './srcApp/flexBox';

import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Screen1 from './srcApp/stackNavigation/Screen1';
import Screen2 from './srcApp/stackNavigation/Screen2';

 const Stack = createNativeStackNavigator();
 const TabNavi = () =>{
    <Stack.Navigator>
    <Stack.Screen name="Screen1" component={Screen1} />
    <Stack.Screen name="Screen2" component={Screen2} />
  </Stack.Navigator>
 }
const Tab = createBottomTabNavigator();
AppRegistry.registerComponent(appName, () => () => (
  <NavigationContainer>
    
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Trang chủ') {
            iconName = focused
              ? 'book'
              : 'book-outline';
          } else if (route.name === 'Cài đặt') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          else if (route.name === 'Screen2') {
            return <Image source={require('./srcApp/images/Icon.png')}/>
          }


          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Trang chủ" component={TabNavi} />
      <Tab.Screen
        name="Screen1"
        component={Screen1}
        options={{title: 'Giỏ hàng'}}
      />
      <Tab.Screen
        name="Screen2"
        component={Screen2}
        options={{title: 'Kênh đăng ký'}}
      />
      <Tab.Screen name="Cài đặt" component={Screen2} />
    </Tab.Navigator>
  </NavigationContainer>
));
