import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import AntDesign from '@expo/vector-icons/AntDesign';
import Foundation from '@expo/vector-icons/Foundation';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors } from '../../constants/Colors';
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.PRIMARY,
      }}
    >
<Tabs.Screen name='home'
options={{
  tabBarLabel: 'Home',
    tabBarIcon: ({color}) =>
       <AntDesign name='home' 
    size={24} 
    color={color}
    />
  }}
/>

<Tabs.Screen name='explore'
options={{
  tabBarLabel: 'explore',
    tabBarIcon: ({color}) =>
      <Foundation name="web" 
    size={24}
     color={color} />
    
  }}/>
<Tabs.Screen name='profile'
options={{
  tabBarLabel: 'profile',
    tabBarIcon: ({color}) =>
       <MaterialCommunityIcons name="face-man-profile"
    size={24}
      color={color} />  
  }}/>
    </Tabs>
  )
}