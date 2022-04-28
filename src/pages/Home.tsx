import React, {useState, useEffect} from "react";
import {Text, StyleSheet, SafeAreaView, TextInput, Platform, TouchableOpacity, ScrollView, FlatList, Alert} from 'react-native';
import Button from "../components/Button";
import SkillCard from "../components/SkillCard";

interface SKillData {
    id: string;
    name: string;
    date?: Date;
}

export default function Home() { 
    const [newSkill, setNewSkill] = useState('');
    const [mySkills, setMySkills] = useState<SKillData[]>([]);
    const [greetings, setGreetings] = useState('');

    const handlePress = () => {
        const data = {
            id: String(new Date().getTime()),
            name: newSkill
        }
        if (newSkill.length !== 0) {
            setMySkills([...mySkills, data])
            setNewSkill('');
        } else {
            Alert.alert('Digite alguma skill')
        }
    }

    const handleRemoveSkill = (id: string) => {
        setMySkills(mySkills => mySkills.filter((skill:any) => {
            return skill.id !== id;
        }));
    }

    useEffect(() => {
        const currentHour = new Date().getHours();
        console.log(currentHour)
        if (currentHour < 12) {
            setGreetings('Good morning');
        } else if (currentHour >= 12 && currentHour < 18) {
            setGreetings('Good afeternoon');
        } else {
            setGreetings('Good night');
        }
    }, [])

  return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Welcome, Leonardo</Text>
            <Text style={styles.greetings}>{greetings}</Text>
            <TextInput style={styles.input} placeholder='New skill' placeholderTextColor='#555' value={newSkill} onChangeText={text => setNewSkill(text)}/>
            <Button title='Add' onPress={handlePress}/>
            <Text style={[styles.title, {marginTop: 50, marginBottom: 30}]}>My Skills</Text>
            <FlatList showsVerticalScrollIndicator={false} data={mySkills} keyExtractor={item => item.id} renderItem={({item}) => (
                <SkillCard onPress={() => handleRemoveSkill(item.id)} skill={item.name}/>
            )}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        paddingHorizontal: 20,
        paddingVertical: 70,
        backgroundColor: '#121015',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1f1e25',
        color: 'white',
        alignSelf: 'stretch',
        fontSize: 18,
        padding: Platform.OS === 'ios' ? 10 : 15,
        borderRadius: 7,
        marginTop: 30
    },
    greetings: {
        color: '#fff',
    }
})