import React from 'react';
import {Text, View,StyleSheet} from 'react-native';

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
});
export default [
    {
        id: '1',
        image: require('/Users/jongwon/Glass/assets/onboard.gif'),
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
        id: '2',
        image: require('/Users/jongwon/Glass/assets/onboard2.gif'),
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
        description:
        <View
        style={{
            alignItems: 'center',
            top: -50,
        }}>
        <Text style={styles.subTextstyle}>투명은 시각장애인과 비장애인의</Text>
        <Text style={styles.subTextstyle}>커뮤니케이션을 돕는 IOT 점자 프린터,</Text>
        <Text style={styles.subTextstyle}>음성 메신저 어플리케이션입니다</Text>
        </View>,
    },
    {
        id: '3',
        image: require('/Users/jongwon/Glass/assets/onboard3.gif'),
        title: 
        <View
        style={{
            alignItems: 'center',
            top: -80,}}>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.Textstyle1}>투명한 </Text>
        <Text style={styles.Textstyle2}>점자 라벨</Text>
        </View>
        <Text style={styles.Textstyle1}>앱으로 뽑아서</Text>
        <Text style={styles.Textstyle1}>간편하게 붙여주세요</Text>
        </View>,
        description:
        <View
        style={{
            alignItems: 'center',
            top: -50,
        }}>
        <Text style={styles.subTextstyle}>투명한 점자 라벨지로</Text>
        <Text style={styles.subTextstyle}>어디에나 붙일 수 있는</Text>
        <Text style={styles.subTextstyle}>점자 메모를 인쇄할 수 있습니다</Text>
        </View>,
    },
    {
        id: '4',
        image: require('/Users/jongwon/Glass/assets/onboard4.gif'),
        title: 
        <View
        style={{
            alignItems: 'center',
            top: -80,}}>
        <Text style={styles.Textstyle1}>더 편리하게!</Text>
        <Text style={styles.Textstyle1}>문자로 보내는</Text>
        <Text style={styles.Textstyle2}>음성 메세지</Text>
        </View>,
        description:
        <View
        style={{
            alignItems: 'center',
            top: -50,
        }}>
        <Text style={styles.subTextstyle}>투명 앱을 통해 보내는</Text>
        <Text style={styles.subTextstyle}>문자 메시지는 음성으로 변환되어</Text>
        <Text style={styles.subTextstyle}>시각장애인 사용자에게 전달됩니다</Text>
        </View>,
    },
    {
        id: '5',
        image: require('/Users/jongwon/Glass/assets/onboard5.gif'),
        title: 
        <View
        style={{
            alignItems: 'center',
            top: -80,}}>
        <View style={{flexDirection: 'row'}}>
        <Text style={styles.Textstyle2}>투명 기기</Text>
        <Text style={styles.Textstyle1}>를 간편하게</Text>
        </View>
        <Text style={styles.Textstyle1}>관리할 수 있습니다</Text>
        </View>,
        description:
        <View
        style={{
            alignItems: 'center',
            top: -50,
        }}>
        <Text style={styles.subTextstyle}>배터리 잔량, 라벨지 잔량</Text>
        <Text style={styles.subTextstyle}>연결된 사람을 확인하고</Text>
        <Text style={styles.subTextstyle}>사용자를 추가할 수 있습니다</Text>
        </View>,
    },

]