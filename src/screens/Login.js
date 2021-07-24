import React,{useState, useRef, useContext} from 'react';
import styled from 'styled-components/native';
import { Text, View, TouchableWithoutFeedback, Keyboard, Alert} from 'react-native';
import {Image, Input, Button} from '../components';
import {images} from '../utils/images';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../utils/common';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { login } from '../utils/firebase';
import { ProgressContext, UserContext } from '../contexts';

const Container = styled.View`
flex: 1;
background-color: ${({theme})=>theme.background};
justify-content: center;
padding: 0 20px;
marginLeft: 20px; 
marginRight: 20px;
`;
const ErrorText=styled.Text`
align-items: flex-start;
width: 100%;
height: 20px;
margin-bottom: 10px;
line-height: 20px;
color: ${({theme})=>theme.errorText};
`;

const Login=({navigation})=>{
    const {dispatch} =useContext(UserContext);
    const {spinner} = useContext(ProgressContext);
    const insets = useSafeAreaInsets();
    const [email, setEmail]=useState('');
    const [password, setPassword]=useState('');
    const passwordRef=useRef();
    const [errorMessage, setErrorMessage]=useState('');

    const _handleEmailChange=email=>{
        const changedEmail=removeWhitespace(email);
        setEmail(changedEmail);
        setErrorMessage(
            validateEmail(changedEmail) ? '' : 'Please verify your email.'
        );
    };
    const _handlePasswordChange=password=>{
        setPassword(removeWhitespace(password));
    };
    const _handleLoginButtonPress=async()=>{
        try{
            spinner.start();
            const user = await login({email,password});
            dispatch(user);
        }catch(e){
            Alert.alert('다시 로그인해주세요.',e.message);
        }finally{
            spinner.stop();
        }
    };

    return (
        <KeyboardAwareScrollView
        contentContainerStyle={{flex:1}}
        extraScrollHeight={20}>
        <Container insets={insets}>
            <View style={{
                 flex: 1,
                 flexDirection: 'row',
                 bottom: -250,
                 left: 80,
            }}>
            <Text style={{
                 top: -100,
                 left: 10,
                 fontSize: 28,
                 fontWeight: 'bold',
                 color: '#6c6c6c',
             }}>로그인하기</Text>
             <Text style={{
                 top: -120,
                 left: 10,
                 fontSize: 50,
                 fontWeight: 'bold',
                 color: '#eed472',
             }}>.</Text>
            </View>
            <View style={{
                flex:1,
                top: 100,
            }}>
            <Input
            value={email}
            onChangeText={_handleEmailChange}
            onSubmitEditing={_handleLoginButtonPress}
            placeholder="아이디 입력"
            returnKeyType="next"
            />  
            <Input
            ref={passwordRef}
            value={password}
            onChangeText={_handlePasswordChange}
            onSubmitEditing={()=>{}}
            placeholder="비밀번호 입력"
            returnKeyType="done"
            isPassword
            />
            <ErrorText>{errorMessage}</ErrorText>   
            </View>
            <View style={{
                flex: 1,
                top: 130,
                marginLeft: 40,
                marginRight: 40,
            }}>
            <Button title="로그인하기" onPress={_handleLoginButtonPress}/>
            </View>
            <View style={{
                flex:1,
                marginLeft: 40,
                marginRight: 40,
            }}>
            <Button 
            title="신규회원 가입하기" 
            backgroundColor="#ffffff"
            onPress={()=>navigation.navigate('Signup')}
            isFilled={false}/>
            </View>    
        </Container>
        </KeyboardAwareScrollView>
    );
};

export default Login;