import { View, Text, FlatList, StyleSheet, Animated, Dimensions, TouchableOpacity } from 'react-native';
import MessageItem from './message-item';
import { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';


const { width } = Dimensions.get('window')
const BOX_SIZE = (width - 64) / 7;

function MessageList({data}){
    const [weekdays, setWeekdays] = useState([]);
    const emotion_colors = {
        joy: 'yellow',
        anger: 'red',
        surprise: 'pink',
        sadness: 'blue'
    }

    useEffect(()=>{
        const today = new Date();
        const currentDate = today.getDay()

        const monday = new Date(today.toDateString());
        monday.set
        monday.setDate(today.getDate() - (currentDate == 0 ? 6: currentDate - 1));

        const days = Array.from({length: 7}, (_, index) =>{
            const day = new Date(monday);
            day.setDate(monday.getDate() + index);
            return {
                day: day.toLocaleDateString('en-US', {weekday: 'short'}),
                date: day.toISOString()
            };
        });
        setWeekdays(days);
    }, []);

    const getCapsuleForDay = (date) => data.find(capsule => {const d = new Date(capsule.date_sent); 
        const a = new Date(d.toDateString()); return a.toISOString() === date})

    function renderItem({item}){
        return <MessageItem data={item}/>
    }
    const navigation = useNavigation();

    function handleWeekPress(capsule){
        if (capsule){
            navigation.navigate("MessageSelected", {data: capsule})
        }
        else{
            navigation.jumpTo("MessageScreen")
        }
    }


    return (
        <View>
            <View style={styles.container}>
                {weekdays.map((dayObject, index)=>{
                    const capsule = getCapsuleForDay(dayObject.date);

                    return (
                        <TouchableOpacity
                            key={index}
                            style={[styles.dayBox, capsule && {backgroundColor: emotion_colors[capsule.emotion]}]}
                            onPress={()=>handleWeekPress(capsule)}
                        >
                            <Text>{dayObject.day}</Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
           <FlatList 
           data={data} 
           keyExtractor={item=> item.id}  
           renderItem={renderItem}
           />
        </View>
    );
}

export default MessageList;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 10,
        paddingHorizontal: 16
    },
    dayBox: {
        width: BOX_SIZE,
        height: BOX_SIZE,
        aspectRatio: 1,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 2,
        borderRadius: 5,
    },
    capsule: {
        backgroundColor: 'green'
    }
})