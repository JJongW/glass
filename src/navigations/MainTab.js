import React, {useContext, useEffect} from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {My, ChannelList, Print, Product} from '../screens';
import { ThemeContext } from 'styled-components';
import MyIcon1 from '../icons/iconmessage';
import MyIcon2 from '../icons/iconprint';
import MyIcon3 from '../icons/iconproduct';
import MyIcon4 from '../icons/iconmy';

const Tab=createBottomTabNavigator();
const TabIcon1=({name, size, color})=>{
    return <MyIcon1 name="message" size={28} color={color}/>;
};
const TabIcon2=({name, size, color})=>{
    return <MyIcon2 name="print" size={28} color={color}/>;
};
const TabIcon3=({name, size, color})=>{
    return <MyIcon3 name="product" size={28} color={color}/>;
};
const TabIcon4=({name, size, color})=>{
    return <MyIcon4 name="my" size={28} color={color}/>;
};
const MainTab=({navigation, route})=>{
    const theme=useContext(ThemeContext);

    useEffect(()=>{
        const titles=route.state?.routeNames||['MESSAGE'];
        const index=route.state?.index||0;
        navigation.setOptions({headerShown: false});
    },[route]);
    return(
        <Tab.Navigator
        tabBarOptions={{
            iconStyle: {marginLeft: 10},
            labelStyle:{marginLeft: 10},
            activeTintColor: '#79cee1',
            inactiveTintColor: "#b9b9b9",
            style: {
            position:"absolute",
            borderRadius: 30,
            shadowColor: '#000000',
            shadowOpacity: 0.1,
            shadowOffset: {
                height: -5,
            },
            height: 90,
            },
            labelPosition: 'below-icon',
        }}>
            <Tab.Screen name="MESSAGE" component={ChannelList}
            options={{
                tabBarIcon: props=> TabIcon1({...props, name: 'message',
                color: props.focused ? '#79cee1' : '#b9b9b9'}),
             }}/>
            <Tab.Screen name="PRINT" component={Print}
            options={{
                tabBarIcon: props=> TabIcon2({...props, name: 'print',
                color: props.focused ? '#79cee1' : '#b9b9b9'}),
             }}/>
            <Tab.Screen name="PRODUCT" component={Product}
            options={{
                tabBarIcon: props=> TabIcon3({...props, name: 'product',
                color: props.focused ? '#79cee1' : '#b9b9b9'}),
             }}/>
            <Tab.Screen name="MY" component={My}
            options={{
                tabBarIcon: props=> TabIcon4({...props, name: 'my',
                color: props.focused ? '#79cee1' : '#b9b9b9'}),
             }}/>
        </Tab.Navigator>
    );
};

export default MainTab;