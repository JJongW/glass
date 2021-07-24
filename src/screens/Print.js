import React, {useState} from 'react';
import styled from 'styled-components/native';
import {Text, View, StyleSheet,Pressable,TextInput, Alert} from 'react-native';
import { StatusBar } from 'expo-status-bar';

ShowDelay=()=>{
    setTimeout(function(){
        Alert.alert("인쇄되었습니다!")
    },5000);
}

const styles =StyleSheet.create({
    buttonContainer2:{
        marginVertical: 20,
        height: 50,
        width: 300,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        borderColor: '#eed472',
        backgroundColor: "#eed472"
    },
    buttonContainer:{
        marginVertical: 20,
        height: 50,
        width: 300,
        marginHorizontal: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#bdbdbd',
        borderRadius: 10,
        borderWidth: 2,
        backgroundColor: "#ffffff"
    },
    buttonText:{
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
        color: "#bdbdbd"
    },
    buttonText2:{
        textTransform: 'uppercase',
        fontSize: 16,
        fontWeight: 'bold',
        color: "#ffffff"
    },
});

const Print=()=>{
    let korean='⠑'.charCodeAt(0).toString(16);
    let Korean=String.fromCharCode(parseInt('erc*',16));
    let Korean2=String.fromCharCode(parseInt('\ae00',16));
    const [buttonPresses,setButtonPresses]=useState(0);
    return(
        <View 
         style={{
             flex: 1,
             backgroundColor: '#f5f5f5',
             }}>
             <View style={{
                 flexDirection: 'row',
             }}>
             <Text style={{
                 top: 70,
                 left: 105,
                 fontSize: 28,
                 fontWeight: 'bold',
                 color: '#6c6c6c',
             }}>점자라벨 만들기</Text>
             <Text style={{
                 top:50,
                 left:105,
                 fontSize: 50,
                 fontWeight: 'bold',
                 color: '#eed472',
             }}>.</Text>
             </View>
             <View 
             style={{
                 position: 'absolute', 
                 backgroundColor: '#ffffff',
                 bottom: 0,
                 right: 0,
                 left: 0,
                 top: 120,
                 borderRadius: 30,
                 shadowColor: '#000',
                 shadowOpacity: 0.1,
                 shadowOffset: {
                 height: -1,
                 },
             }}>
                 <View
                 style={{
                    position: 'absolute', 
                    backgroundColor: '#Ade0ec',
                    bottom: 200,
                    right: 20,
                    left: 20,
                    top: 30,
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <View
                    style={{
                        position: 'absolute',
                        backgroundColor: '#ffffff',
                        borderRadius: 40,
                        top: 20,
                        bottom: 460,
                        left: 50,
                        right: 50,
                    }}>
                    </View>
                    <View
                    style={{
                        alignItems: 'center',
                        position: 'absolute',
                        flexDirection: 'row',
                    }}>
                    <Text
                    style={{
                        left: 5,
                        fontSize: 35,
                        color: '#ffffff',
                        fontWeight: 'bold',
                    }}>가</Text>
                    <Text 
                    style={{
                        left: 10,
                        fontSize:50,
                        color: '#ffffff',
                    }}>{'\u283f'} </Text>
                </View>
                <TextInput 
                Text="텍스트를 입력해주세요"
                style={{
                    fontSize:20,
                    color: '#ffffff',
                    top: 35,
                }}/>
                </View>   
                <Text 
                style={{
                    fontSize:50,
                    color: '#f5f5f5',
                }}>{Korean}</Text>
             </View>
             <View
             style={{
                 marginTop: 600,
                 alignItems: 'center',
             }}>
             <Pressable
                style={({pressed})=>[
                    pressed? 
                    styles.buttonContainer:styles.buttonContainer2]}
                    onPress={this.ShowDelay}>
                {({pressed})=>(
                    pressed?
                    (<Text style={styles.buttonText}>기기에서 인쇄를 시작합니다</Text>)
                    :
                    (<Text style={styles.buttonText2}>인쇄하기</Text>)
                )}
             </Pressable>
             </View>
        </View>
    );
};

export default Print;