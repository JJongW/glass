import React, {useContext, useState} from 'react';
import styled, {ThemeContext} from 'styled-components/native';
import {Text, Alert, Button} from 'react-native';
import {Image, Input} from '../components';
import { logout, getCurrentUser,updateUserPhoto } from '../utils/firebase';
import {UserContext, ProgressContext} from '../contexts';
import {images} from '../utils/images';

const Container =styled.View`
flex: 1;
justify-content: center;
align-items: center;
padding: 0 20px;
`;
const My=()=>{
    const {dispatch}=useContext(UserContext);
    const {spinner}=useContext(ProgressContext);
    const theme= useContext(ThemeContext);
    const [photoUrl, setPhotoUrl]=useState(images.photo);

    const user=getCurrentUser();

    const _handleLogoutButtonPress=async ()=>{
        try {
            spinner.start();
            await logout();
        } catch(e){
            console.log('[My] logout: ', e.message);
        } finally{
            dispatch({});
            spinner.stop();
        }
    };
    const _handlePhotoChange=async url=>{
        try{
            spinner.start();
            const updatedUser=await updateUserPhoto(url);
            setPhotoUrl(updatedUser.photoUrl);
        } catch(e){
            Alert.alert('Photo Error',e.message);
        } finally{
            spinner.stop();
        }
    };

    return(
        <Container>
            <Image
            rounded url={photoUrl}
            onChangeImage={url=>setPhotoUrl(url)}
            showButton/>
            <Input label="Name" value={user.name} disabled/>
            <Input labek='Email' value={user.email} disabled/>
            <Button 
            title="로그아웃" 
            onPress={_handleLogoutButtonPress}
                />
        </Container>
    );
};

export default My;