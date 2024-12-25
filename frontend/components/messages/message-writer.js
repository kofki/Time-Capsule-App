import { useState } from "react"
import { TextInput, StyleSheet, View, Button } from "react-native"


export const MessageWriter = () => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");

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
                    date_sent: '2024-12-24',
                    date_received: '2024-12-24',

                }),
            });
            const data = await response.json();
            console.log(data);
            return; 
        }
        if (title.length <= 0 || message.length <= 0){
            console.log("cannot send message, too short");
            return;
        }
        sumbit();
    }


    return (
        <View>
            <View>
                <TextInput 
                    style={styles.title} 
                    onChangeText={text=> setTitle(text)} 
                    value={title}
                    autoCapitalize="sentences"
                    defaultValue="Write a title for your message..."
                />
            </View>
            <View>
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
            <Button onPress={handleSubmit} title="Submit"/>

        </View>
        
    );
}

const styles = StyleSheet.create({
    title: {
        padding: 10,
        borderWidth: 1,
        height: 10,
    },
    message: {
        borderWidth: 1,
        height: 100
    },
})
