import React from 'react';
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input :{
      borderColor:"black", 
      borderWidth:1 , 
      padding :20,
       
    },
    inputContainer :{
      flexDirection :'row', 
      justifyContent :'space-between', 
      alignContent:'center',
      bottom:20
    },
    text :{
        color: '#666',
    },
  });