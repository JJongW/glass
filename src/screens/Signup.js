import React, { useState, useRef, useEffect, useContext} from 'react';
import styled from 'styled-components/native';
import { Image, Input, Button } from '../components';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { validateEmail, removeWhitespace } from '../utils/common';
import { View, Text, Alert } from 'react-native';
import {signup} from '../utils/firebase';
import { ProgressContext, UserContext} from '../contexts';

const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: ${({ theme }) => theme.background};
  padding: 40px 20px;
  margin-left: 20px;
  margin-right: 20px;
`;
const ErrorText = styled.Text`
  align-items: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 10px;
  line-height: 20px;
  color: ${({ theme }) => theme.errorText};
`;

const Signup = () => {
  const {dispatch} = useContext(UserContext);
  const {spinner} = useContext(ProgressContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [disabled, setDisabled] = useState(true);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const didMountRef=useRef();

  useEffect(() => {
    if (didMountRef.current){
      let _errorMessage = '';
      if (!name) {
        _errorMessage = 'Please enter your name.';
      } else if (!validateEmail(email)) {
        _errorMessage = 'Please verify your email.';
      } else if (password.length < 6) {
        _errorMessage = 'The password must contain 6 characters at least.';
      } else if (password !== passwordConfirm) {
        _errorMessage = 'Passwords need to match.';
      } else {
        _errorMessage = '';
      }
      setErrorMessage(_errorMessage);
    } else {
        didMountRef.current=true;
    }
 }, [name, email, password, passwordConfirm]);
  useEffect(() => {
    setDisabled(
      !(name && email && password && passwordConfirm && !errorMessage)
    );
  }, [name, email, password, passwordConfirm, errorMessage]);

  const _handleSignupButtonPress = async()=>{
      try{
        spinner.start();
          const user=await signup({email, password, name});
          dispatch(user);
      } catch(e){
          Alert.alert('가입 오류입니다.',e.message);
      } finally{
        spinner.stop();
      }
  };

  return (
    <KeyboardAwareScrollView 
    contentContainerStyle={{flex: 1}}
    extraScrollHeight={20}>
      <Container>
        <View style={{
                 flex: 1,
                 flexDirection: 'row',
                 bottom: -200,
                 left: 70,
            }}>
            <Text style={{
                 top: -100,
                 fontSize: 25,
                 fontWeight: 'bold',
                 color: '#6c6c6c',
             }}>사용자 등록하기</Text>
             <Text style={{
                 top: -120,
                 fontSize: 50,
                 fontWeight: 'bold',
                 color: '#eed472',
             }}>.</Text>
            </View>
        <Input
          label="Name"
          value={name}
          onChangeText={text => setName(text)}
          onSubmitEditing={() => {
            setName(name.trim());
            emailRef.current.focus();
          }}
          onBlur={() => setName(name.trim())}
          placeholder="이름 입력"
          returnKeyType="next"
        />
        <Input
          ref={emailRef}
          label="Email"
          value={email}
          onChangeText={text => setEmail(removeWhitespace(text))}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="이메일 입력"
          returnKeyType="next"
        />
        <Input
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={text => setPassword(removeWhitespace(text))}
          onSubmitEditing={() => passwordConfirmRef.current.focus()}
          placeholder="비밀번호 입력"
          returnKeyType="done"
          isPassword
        />
        <Input
          ref={passwordConfirmRef}
          label="Password Confirm"
          value={passwordConfirm}
          onChangeText={text => setPasswordConfirm(removeWhitespace(text))}
          onSubmitEditing={_handleSignupButtonPress}
          placeholder="비밀번호 확인"
          returnKeyType="done"
          isPassword
        />
        <ErrorText>{errorMessage}</ErrorText>
        <View style={{
            flex: 1,
            top: 50,
            marginLeft: 70,
            marginRight: 70,
        }}>
        <Button
          title="등록하기"
          onPress={_handleSignupButtonPress}
          disabled={disabled}
        />
        </View>
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Signup;