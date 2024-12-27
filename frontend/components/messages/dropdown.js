import { useState } from "react";
import { View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useFocusEffect } from "@react-navigation/native";

export const Dropdown = ({data, selectedValue, onChange})=>{
    return (
        <View>
            <Picker selectedValue={selectedValue} onValueChange={onChange}>
                {Object.entries(data).map(([key, value])=>{
                    return <Picker.Item key={key} label={String(value)} value={key}/>
                })}
            </Picker>
        </View>
    );
}