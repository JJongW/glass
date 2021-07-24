import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import FastImage from 'react-native-fast-image';
const OnboardingScreen = ({navigation})=>{
    const Title=()=>{
        <View>
        <Text>만나서 반갑습니다!</Text>
        <Text/>
        </View>
    }
    return (
        <Onboarding
        pages={[
            {
                backgroundColor: '#ffffff',
                image: <FastImage 
                style={{width: 250, height: 250, bottom: 60}}
                source={require('/Users/jongwon/Glass/assets/onboard.gif')}/>,
                title: 
                <View
                style={{
                    alignItems: 'center',
                    top: -80,}}>
                <Text style={styles.Textstyle1}>만나서 반갑습니다!</Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.Textstyle2}>투명</Text>
                <Text style={styles.Textstyle1}>입니다</Text>
                </View>
                </View>,
            },
            {
                backgroundColor: '#ffffff',
                image: <FastImage 
                style={{width: 250, height: 250, bottom: 60}}
                source={require('/Users/jongwon/Glass/assets/onboard2.gif')}/>,
                title: 
                <View
                style={{
                    alignItems: 'center',
                    top: -80,}}>
                <Text style={styles.Textstyle1}>시각장애인, 그리고</Text>
                <Text style={styles.Textstyle1}>시각장애인과 함께</Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.Textstyle2}>일하는 사람들</Text>
                <Text style={styles.Textstyle1}>을 위해!</Text>
                </View>
                </View>,
                subtitle:
                <View
                style={{
                    alignItems: 'center',
                    top: -50,
                }}>
                <Text style={styles.subTextstyle}>투명은 시각장애인과 비장애인의</Text>
                <Text style={styles.subTextstyle}>커뮤니케이션을 돕는 IOT 점자 프린터,</Text>
                <Text style={styles.subTextstyle}>음성 메신저 어플리케이션입니다</Text>
                </View>
            },
            {
                backgroundColor: '#ffffff',
                image: <FastImage 
                style={{width: 250, height: 250, bottom: 60}}
                source={require('/Users/jongwon/Glass/assets/onboard3.gif')}/>,
                title: 
                <View
                style={{
                    alignItems: 'center',
                    top: -80,}}>
                <Text style={styles.Textstyle1}>만나서 반갑습니다!</Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.Textstyle2}>투명</Text>
                <Text style={styles.Textstyle1}>입니다</Text>
                </View>
                </View>,
            },
            {
                backgroundColor: '#ffffff',
                image: <FastImage 
                style={{width: 250, height: 250, bottom: 60}}
                source={require('/Users/jongwon/Glass/assets/onboard4.gif')}/>,
                title: 
                <View
                style={{
                    alignItems: 'center',
                    top: -80,}}>
                <Text style={styles.Textstyle1}>만나서 반갑습니다!</Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.Textstyle2}>투명</Text>
                <Text style={styles.Textstyle1}>입니다</Text>
                </View>
                </View>,
            },
            {
                backgroundColor: '#ffffff',
                image: <FastImage 
                style={{width: 250, height: 250, bottom: 60}}
                source={require('/Users/jongwon/Glass/assets/onboard5.gif')}/>,
                title: 
                <View
                style={{
                    alignItems: 'center',
                    top: -80,}}>
                <Text style={styles.Textstyle1}>만나서 반갑습니다!</Text>
                <View style={{flexDirection: 'row'}}>
                <Text style={styles.Textstyle2}>투명</Text>
                <Text style={styles.Textstyle1}>입니다</Text>
                </View>
                </View>,
            },
        ]}
        />
    );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
    Textstyle1: {
        alignItems: 'center',
        fontSize: 22,
        color: "#6c6c6c",
        fontWeight: 'bold',
    },
    Textstyle2: {
        alignItems: 'center',
        fontSize: 22,
        color: '#79cee1',
        fontWeight: 'bold',
    },
    subTextstyle:{
        alignItems: 'center',
        fontSize: 15,
        color: '#6c6c6c',
    }
})