import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { enableScreens } from 'react-native-screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native';

import Home from './src/screens/Home';
import AboutUs from './src/screens/AboutUs';
import Services from './src/screens/Services';
import ContactUs from './src/screens/ContactUs';

enableScreens();
const Tab = createBottomTabNavigator();

// Fallback icon component
const FallbackIcon = ({ iconName, size, color }) => (
  <Text style={{ fontSize: size, color }}>{iconName}</Text>
);

const SafeIcon = ({ name, size, color, focused }) => {
  try {
    return (
      <Ionicons
        name={name}
        size={size}
        color={color}
      />
    );
  } catch (error) {
    // Fallback to text if icon fails
    return <FallbackIcon iconName={focused ? '●' : '○'} size={size} color={color} />;
  }
};

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: true,
          tabBarActiveTintColor: '#ff8000',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: {
            paddingBottom: 5,
            height: 60,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <SafeIcon
                name={focused ? 'home' : 'home-outline'}
                size={size}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="About Us"
          component={AboutUs}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <SafeIcon
                name={focused ? 'information-circle' : 'information-circle-outline'}
                size={size}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Services"
          component={Services}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <SafeIcon
                name={focused ? 'grid' : 'grid-outline'}
                size={size}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Contact Us"
          component={ContactUs}
          options={{
            tabBarIcon: ({ focused, color, size }) => (
              <SafeIcon
                name={focused ? 'call' : 'call-outline'}
                size={size}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
