import React from 'react';
import { View, Text, StyleSheet, useWindowDimensions} from 'react-native';
import FastImage from 'react-native-fast-image';

export default OnboardingItem=({item})=>{
    const {width} = useWindowDimensions();

    return(
        <View style={[styles.container,{width}]}>
            <FastImage 
            source={item.image}
            style={[styles.image,{width, resizeMode:'contain'}]}
            resizeMode={FastImage.resizeMode.contain}/>
            <View style={{flex: 0.3,
            alignItems: 'center',}}>
                <Text style={{
                    bottom: 70,
                }}> {item.title}</Text>
                <Text style={{
                    bottom: 50,
                }}> {item.description}</Text>
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image:{
        flex:0.7,
        justifyContent: 'center',
    }
});