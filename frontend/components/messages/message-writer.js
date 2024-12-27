import React, { useState } from "react"
import { TextInput, StyleSheet, View, Button, ScrollView, Text } from "react-native"
import DateTimePicker from '@react-native-community/datetimepicker';
import { useNavigation } from "@react-navigation/native";
import * as Notifications from 'expo-notifications';
import { useFocusEffect } from "@react-navigation/native";
import { Dropdown } from "./dropdown";


export const MessageWriter = ({emotion}) => {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [years, setYears] = useState(0);
    const [months, setMonths] = useState(0);

    useFocusEffect(
        React.useCallback(()=>{
            return () =>{
                setTitle("");
                setMessage("");
                setYears(0);
                setMonths(0);
            };
        }, [])
    );

    const makeDict = (N) => {
        let dict = new Object();
        for (let i = 0; i < N; i++){
            dict[i] = i
        }
        return dict;
    }
    
    const navigation = useNavigation();

    function handleSubmit() {
        const combinedDateTime = () => {
            let date = new Date()
            date.setFullYear(date.getFullYear()+years);
            date.setMonth(date.getMonth()+months);
            return date;
        };
        const sumbit = async() => {
            try{
                const response = await fetch('http://192.168.1.120:8000/api/message/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',

                    },
                    body: JSON.stringify({
                        emotion: emotion,
                        title: title,
                        message: message,
                        date_sent: new Date(),
                        date_received: combinedDateTime().toISOString(),

                    }),
                });
                const data = await response.json();
            } catch(e){
                console.error(e);
            }
            const scheduleNotifications = async() => {
                await Notifications.scheduleNotificationAsync({
                    content: {
                        title: "Your Time Capsule Has Arrived!",
                        body: "Enter the Time Capsule App to see your message from the past!",
                    },
                    trigger: {
                        type: "date",
                        date: combinedDateTime()
                    }
                });
            }
            scheduleNotifications();
            navigation.jumpTo("HomeScreen");
            return; 
        }
        if (title.length <= 0 || message.length <= 0){
            alert("cannot send message, too short");
            return;
        }
        if (months == 0 && years == 0){
            alert("cannot have 0 months and years");
            return;
        }
        sumbit();
    }


    return (
        <ScrollView keyboardShouldPersistTaps='handled' style={styles.general}>
            <View style={styles.container}>
                <View style={styles.box}>
                    <TextInput 
                        style={styles.title}
                        onChangeText={text=> setTitle(text)} 
                        value={title}
                        autoCapitalize="sentences"
                        defaultValue="Write a title for your message..."
                    />
                </View>
                <View style={styles.box}>
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
                <Text>Months from now on</Text>
                <Dropdown data={makeDict(12)} selectedValue={String(months)} onChange={(val)=>{setMonths(Number(val))}}/>
                <Text>Years from now on</Text>
                <Dropdown data={makeDict(11)} selectedValue={String(years)} onChange={(val)=>{setYears(Number(val))}}/>
                <Button onPress={handleSubmit} title="Submit"/>
            </View>
        </ScrollView>
        
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
    box: {
        padding: 10
    },
    container: {
        margin: 5,
    },
    general: {
        height: '100%',
    }
})
