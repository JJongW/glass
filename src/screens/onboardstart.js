import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Onboarding from './Onboarding';

export default onboardstart=()=>{
    return(
        <View style={styles.container}>
        <Onboarding/>
        <StatusBar style="auto"/>
        </View>
    );
};

const styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})