import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import BookTransaction from './screens/BookTransaction';
import SearchBook from './screens/SearchBook'
export default class App extends React.Component{
  render(){
  return(
    <AppContainer/>
  )
  }
}

const TabNavigator=createMaterialTopTabNavigator({
  Transaction:{screen:BookTransaction},
  SearchBook:{screen:SearchBook}
})

var AppContainer=createAppContainer(TabNavigator)
