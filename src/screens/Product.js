import React from 'react';
import styled from 'styled-components/native';
import {Text, View,StyleSheet,Pressable} from 'react-native';
import { StatusBar } from 'expo-status-bar';

const styles = StyleSheet.create({
    textContainer1:{
        color: "#6c6c6c",
        fontSize: 18,
        padding: 15,
    },
});

const Product=()=>{
    return(
        <View 
         style={{
             flex: 1,
             backgroundColor: '#f5f5f5',
             }}>
             <View style={{
                 flexDirection: 'row',
                 alignItems: 'center',
                 left: 140,
             }}>
             <Text style={{
                 top: 50,
                 fontSize: 28,
                 fontWeight: 'bold',
                 color: '#6c6c6c',
             }}>기기관리</Text>
             <Text style={{
                 top:45,
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
                    bottom: 400,
                    right: 20,
                    left: 20,
                    top: 30,
                    borderRadius: 30,
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                <Text 
                style={{
                    fontSize:20,
                    color: '#ffffff',
                }}>기기를 연결해주세요</Text>
                </View>
                <View
                style={{
                    flex:1,
                    position: 'absolute',
                    top: 340,
                    left: 20,
                }}>
                    <Text
                    style={styles.textContainer1}>모델명</Text>
                    <Text
                    style={styles.textContainer1}>모델번호</Text>
                    <Text
                    style={styles.textContainer1}>배터리 잔량</Text>
                    <Text
                    style={styles.textContainer1}>라벨 잔량</Text>
                    <Text
                    style={styles.textContainer1}>등록 유저</Text>
                </View>
             </View>

        </View>
    );
};

export default Product;