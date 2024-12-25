import { useEffect, useState } from "react";
import { View, Text, Button } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MessageList from "../../components/messages/message-list";

export const HomeScreen = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        const fetchData = async() => {
            const response = await fetch('http://192.168.1.110:8000/api/message/');
            const json = await response.json()
            return json;
          
        }
        setData(fetchData());
    }, [])

    
    return (
        <SafeAreaView>
            <MessageList data={data}/>
        </SafeAreaView>
        
    );
}
