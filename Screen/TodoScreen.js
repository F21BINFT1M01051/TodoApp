import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View, Modal, KeyboardAvoidingView, Platform, Image } from 'react-native';
import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Feather from '@expo/vector-icons/Feather';
import Circle from '../Components/Circle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import Picture from '../Components/Picture';


const TodoScreen = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [todoList, setTodoList] = useState([]);
    const [imageUri, setImageUri] = useState(null);  // State to store the image URI
    const [editTodo, setEditTodo] = useState(null)
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];



    // Image picker 
    const pickFromGallery = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("You've refused to allow this app to access your photos!");
            return;
        }

        console.log("Permissions granted");

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 0.5,
        });

        console.log("Image picker result: ", result);

        if (!result.canceled && result.assets.length > 0) {
            const pickedUri = result.assets[0].uri;
            setImageUri(pickedUri);  // Update state with the picked image URI
            console.log("Selected Image URI: ", pickedUri);
        }
    }



    // Async Storage
    useEffect(() => {
        _getTasks();
    }, [])
    const _storeTasks = async (tasks) => {
        try {
            await AsyncStorage.setItem('todoList', JSON.stringify(tasks))
        }
        catch (e) {
            console.log(e)
        }
    };

    const _getTasks = async () => {
        try {
            const getTask = await AsyncStorage.getItem('todoList')
            if (getTask) {
                setTodoList(JSON.parse(getTask))
            }
        }
        catch (e) {
            console.log(e)
        }
    }


    const handleAdd = () => {
        if(inputValue === ""){
            return;
        }
        const newTask = { id: Date.now().toString(), name: inputValue };
        const updated = [...todoList, newTask]
        setTodoList(updated)
        _storeTasks(updated)
        setModalVisible(false);
        setInputValue('');
    };

    const handleDelete = (id) => {
        const filtered = todoList.filter((todo) => todo.id != id)
        setTodoList(filtered)
        _storeTasks(filtered)

    }

    const handleEdit = (todo) => {
        setEditTodo(todo)
        setInputValue(todo.name)

    }

    const handleUpdate = () => {
        const updation = todoList.map((item)=>{
            if(item.id === editTodo.id){
                return{...item, name:inputValue}
            }
            return item;
        })
        setTodoList(updation);
        _storeTasks(updation);
        setEditTodo(null);
        setInputValue("");
    }

    var date = new Date().getDate();
    var month = new Date().getMonth();
    var year = new Date().getFullYear();
    var hour = new Date().getHours();
    var minutes = new Date().getMinutes();
    const currentDayIndex = new Date().getDay();
    const currentDayName = daysOfWeek[currentDayIndex];


    return (
        <View style={{ backgroundColor: '#f6f6f6', height: '100%' }}>
            <View style={{ height: '40%', backgroundColor: '#f6b092' }}>
                <Circle />
                <View style={{ width: 120, height: 120, alignSelf: 'center', backgroundColor: 'white', borderRadius: 60, marginTop: -40 }}>
                    <Image
                        source={{ uri: imageUri }}
                        style={{ width: '100%', height: '100%', borderRadius: 60 }}
                    />

                    <TouchableOpacity onPress={pickFromGallery}>
                        <Feather name="camera" size={22} color="gray" style={{ alignSelf: 'flex-end', marginTop: -30, marginRight: 10 }} />

                    </TouchableOpacity>
                </View>


                <View><Text style={{ alignSelf: 'center', marginTop: 20, fontWeight: '500', color: 'white' }}>Welcome Sana</Text></View>
            </View>
            <View>
                <View style={{
                    height: '72%', backgroundColor: '#eeeeee', borderRadius: 20, marginHorizontal: 10, marginVertical: 20, padding: 18
                }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ flex: 1, fontSize: 16 }}>Daily Tasks</Text>
                            <TouchableOpacity onPress={() => setModalVisible(true)}>
                                <AntDesign name="pluscircle" size={28} color="#f6b092" />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginVertical: 20, height: 380, borderColor: 'lightgray', borderRadius: 20, alignItems: 'center', borderWidth: 2, justifyContent: 'center' }}>


                            <FlatList data={todoList}
                                showsVerticalScrollIndicator={false}
                                ListHeaderComponent={() => (<View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20, marginBottom: 10 }}>
                                    <Text style={{ fontSize: 14, fontWeight: '400', marginTop: 10, fontWeight: '500' }}>{currentDayName} Tasks</Text>
                                    <Text style={{ marginTop: 10, marginLeft: 70, fontWeight: '500' }}>{[date, "-", month + 1, "-", year]}</Text>
                                </View>
                                )}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => (
                                    <View style={{ width: 310 }}>

                                        <View style={{

                                            paddingVertical: 8, borderRadius: 25, backgroundColor: '#e0bbd2', marginTop: 10, height: 50, paddingHorizontal: 15, flexDirection: 'row', shadowColor: 'gray',
                                            elevation: 5,
                                            alignItems: 'center',
                                            marginBottom: 5
                                        }}>
                                            <Text style={{ flex: 1, fontSize: 10 }}>{item.name}</Text>
                                            <TouchableOpacity>
                                                <MaterialCommunityIcons name="pencil" size={24} color="gray" style={{ marginHorizontal: 5 }} onPress={() => handleEdit(item)} />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => handleDelete(item.id)}>
                                                <MaterialCommunityIcons name="delete-empty" size={24} color="gray" style={{ marginLeft: 10 }} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )} />
                            {
                                todoList.length <= 0 && <Picture />
                            }
                        </View>
                    </View>
                </View>
            </View>
            <Modal
                animationType='slide'
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}
            >
                <KeyboardAvoidingView
                    behavior={Platform.OS === "ios" ? "padding" : "height"}
                    style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Add your Task</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Add"
                            value={inputValue}
                            onChangeText={(t) => setInputValue(t)}
                            numberOfLines={50}
                        />
                        {
                            editTodo ? <TouchableOpacity style={{ width: 150, height: 40, backgroundColor: '#f6b092', borderRadius: 20, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}
                                onPress={handleUpdate}>
                                <Text style={{ color: 'white', fontWeight: '500' }}>Save</Text>
                            </TouchableOpacity> : <TouchableOpacity style={{ width: 150, height: 40, backgroundColor: '#f6b092', borderRadius: 20, marginVertical: 10, justifyContent: 'center', alignItems: 'center' }}
                                onPress={handleAdd}>
                                <Text style={{ color: 'white', fontWeight: '500' }}>ADD</Text>
                            </TouchableOpacity>
                        }
                        <TouchableOpacity style={{ width: 150, height: 40, backgroundColor: 'lightgray', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => setModalVisible(false)}>
                            <Text style={{ color: 'white', fontWeight: '500' }}>Cancel</Text>
                        </TouchableOpacity>

                    </View>
                </KeyboardAvoidingView>
            </Modal>
        </View>
    );
};

export default TodoScreen;

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        // flex:1,
        width: '90%',
        height: '55%',
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,

    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 18,
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: 'lightgray',
        borderWidth: 1,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderRadius: 20,
    },
    buttonContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    button: {
        width: 150,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
