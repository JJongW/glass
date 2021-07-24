import React, {useContext} from 'react';
import styled, {ThemeContext} from 'styled-components/native';
import {Text, Button, FlatList} from 'react-native';

const Container =styled.View`
flex: 1;
background-color: ${({theme})=>theme.background};
`;
const ItemContainer=styled.Pressable`
flex-direction: row;
align-items: center;
border-bottom-width: 1px;
border-color: ${({theme})=> theme.listBorder};
padding: 15px 20px;
`;

const ItemTextContainer=styled.View`
flex: 1;
flex-direction: column;
`;

const ItemDescription=styled.Text`
font-size: 20px;
margin-top: 5px;
color:${({theme})=> theme.listTime};
`;
const ItemTitle=styled.Text`
font-size: 20px;
font-weight: 600;
`;
const itemTime=styled.Text`
font-size: 12px;
color: ${({theme})=>theme.listTime};
`;
const channels=[];
for(let idx=0; idx<100; idx++){
    channels.push({
        id: idx,
        title: `title ${idx}`,
        description: `description ${idx}`,
        createdAt: idx,
    });
}
const Item=({item: {id, title, description, createAt}, onPress})=>{
    const theme= useContxt(ThemeContext);
    console.log(`Item: ${id}`);

    return(
        <ItemContainer onPress={()=>onPress({id, title})}>
            <ItemTextContainer>
                <ItemTitle>{title}</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
            </ItemTextContainer>
            <ItemTime>{createAt}</ItemTime>
        </ItemContainer>
    )
}
const ChannelList=({navigation})=>{
    const _handleItemPress=params=>{
        navigation.navigate('Channel',params);
    };

    return(
        <Container> 
            <FlatList
            keyExtractor={item=>item['id'].toString()}
            data={channels}
            rederItem={({item})=>(
                <Item item={item} onPress={_handleItemPress}/>
            )}
            />
        </Container> 
    );
};

export default ChannelList;