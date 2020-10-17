import { StatusBar } from 'expo-status-bar';
import React , {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { GlobalStyles } from './Styles/GlobalStyles';
import AuthScreen from './Views/AuthScreen'
 
export default function App() {
  
  return (
    <AuthScreen />
  );
}
 