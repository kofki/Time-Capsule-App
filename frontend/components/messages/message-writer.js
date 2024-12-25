import { useState } from "react"
import { TextInput, StyleSheet, View, Button } from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";


export const MessageWriter = () => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [date, setDate] = useState(new Date());
    const getCurrentDate = () =>{
        const d = new Date();
        const a = d.toISOString().split('T')[0];
        console.log(a);
        return a
    }
    
    const navigation = useNavigation();

    function handleSubmit() {
        const sumbit = async() => {
            const response = await fetch('http://192.168.1.110:8000/api/message/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',

                },
                body: JSON.stringify({
                    title: title,
                    message: message,
                    date_sent: getCurrentDate(),
                    date_received: date.toISOString().split('T')[0],

                }),
            });
            const data = await response.json();
            console.log(data);
            navigation.jumpTo("Home");
            return; 
        }
        if (title.length <= 0 || message.length <= 0 || new Date() > date){
            console.log("cannot send message, too short");
            return;
        }
        sumbit();
    }


    return (
        <View>
            <View style={styles.container}>
                <TextInput 
                    style={styles.title}
                    onChangeText={text=> setTitle(text)} 
                    value={title}
                    autoCapitalize="sentences"
                    defaultValue="Write a title for your message..."
                />
            </View>
            <View style={styles.container}>
                <TextInput
                    multiline
                    numberOfLines={5}
                    maxLength={200} 
                    style={styles.message} 
                    onChangeText={text => setMessage(text)} 
                    value={message}
                    defaultValue="Write your message..."
                />
            </View>
            <View>
                <DateTimePicker value={date} mode="date" onChange={(e, selectedDate) => setDate(selectedDate)}/>
            </View>
            <Button onPress={handleSubmit} title="Submit"/>

        </View>
        
    );
}

const styles = StyleSheet.create({
    title: {
        borderWidth: 1,
        height: 20,
    },
    message: {
        borderWidth: 1,
        height: 100
    },
    container: {
        padding: 10
    },
})
