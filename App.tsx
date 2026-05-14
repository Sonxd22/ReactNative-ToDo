import React, { useState } from 'react';
import { Button, FlatList, Keyboard, ScrollView, StyleSheet, Text, TextInput, TouchableNativeFeedback, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";
import Home from './src/components/learn/home';
import HomeDetail from './src/components/learn/home.detail';
import Like from './src/app/like';
import LikeDetail from './src/app/like/like.detail';
import About from './src/components/learn/about';
import changePassword from './src/components/learn/change.password';




export default function App(props:any) {

        const stack = createNativeStackNavigator();
        const Drawer = createDrawerNavigator();
        const Tab = createBottomTabNavigator();
        const TabApp = () =>{
          return(
                <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Like" component={Like} />
       
    </Tab.Navigator> 
          )
        }
        const StackApp=()=>{
          return(
           <stack.Navigator
        >
          <stack.Screen 
           name="Home" 
           component={TabApp}
          options={{headerTitle:"Trang Chu",headerShown:false}}
           /> 
          <stack.Screen 
          name="HomeDetail" 
          component={HomeDetail}
          options={({route}:{route:any})=>({headerTitle:`Xem Chi Tiet ${route?.userId}`,
           
          })}
          /> 
           <stack.Screen 
          name="LikeDetail" 
          component={LikeDetail}
          /> 
        </stack.Navigator> )
        }


  return (
   
       <NavigationContainer>
      
        <Drawer.Navigator>
            <Drawer.Screen
       name="StackApp" component={StackApp} />
      <Drawer.Screen
       name="About" component={About} />
      <Drawer.Screen name="changePassword" component={changePassword} />
    </Drawer.Navigator>
       </NavigationContainer>
  );
}
