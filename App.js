import React from 'react';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import { StyleSheet, Text, View, StatusBar, Platform } from 'react-native';
import AddDeck from "./components/AddDeck";
import Home from "./components/Home";
import {purple, white} from "./utils/colors";
import reducer from './reducers';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {FontAwesome, Ionicons} from '@expo/vector-icons'

const Tab = Platform.OS==='ios'?createBottomTabNavigator():createMaterialTopTabNavigator();
const Tabs = () => (
    <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon:({color}) => {
                if (route.name === 'Home'){
                    return <Ionicons name='ios-home' size={38} color={color}/>
                } else if (route.name==='Add Deck'){
                    return <FontAwesome name='plus-square' size={38} color={color}/>
                }
            }
        })}
        navigationOptions={{
            header: null,
        }}
        tabBarOptions={{
            activeTintColor: Platform.OS==='ios'?purple:white,
            style:{
                height: 56,
                backgroundColor: Platform.OS==='ios'?white:purple,
                shadowColor: 'rgba(0,0,0,0.24)',
                shadowOffset:{
                    width:0,
                    height: 3,
                },
                shadowRadius: 6,
                shadowOpacity: 1,
            }
        }}
    >
        <Tab.Screen name='Home' component={Home} />
        <Tab.Screen name='Add Deck' component={AddDeck} />
    </Tab.Navigator>
)
export default function App() {
  return (
      <Provider store={createStore(reducer)}>
        <View>
          <StatusBar backgroundColor={purple}/>
        </View>
          <NavigationContainer>
              <Tabs/>
          </NavigationContainer>
      </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
