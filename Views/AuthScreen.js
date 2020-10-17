import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { globalStyles } from '../Styles/GlobalStyles'

export default function AuthScreen() {
    return (
        <View >
            <Text Style={globalStyles.Text}>Введите ваши учётные данные</Text>
        </View>
    )
}
