import React, { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MessageList from "../../components/messages/message-list";
import { useFocusEffect } from "@react-navigation/native";

export const HomeScreen = () => {
    useFocusEffect(
        React.useCallback(()=>{
            const fetchData = async() => {
                try{
                    const response = await fetch('http://192.168.1.110:8000/api/message/');
                    const json = await response.json();
                    setData(json)
                } catch (error){
                    console.error(error);
                }
                
            
            }
            fetchData();

            return ()=>{setData([])};
    }, [])
    );

    const [data, setData] = useState([]);
    
    return (
        <SafeAreaView>
            <MessageList data={data}/>
        </SafeAreaView>
        
    );
}
