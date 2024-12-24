import MessageList from '../../components/messages/message-list'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useEffect, useState } from 'react';

export const MessageScreen = ()=> {
    const [data, setData] = useState([])

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