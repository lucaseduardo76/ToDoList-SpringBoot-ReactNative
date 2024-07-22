import { View, Text, TextInput, Dimensions, Pressable, Image } from "react-native"
import { styleInput, styleInfos, styleTask } from './homeStyle'
import React, { useState, useEffect } from 'react';
import { HomeScreenRouteProp, UserData, } from "../../interfaces";
import { useRoute, useNavigation } from '@react-navigation/native'
import axios from 'axios'



export const Home = () => {
    const [userData, setUserData] = useState<UserData | null>(null);
    const [taskTitle, setTaskTitle] = useState<any>();

    const route = useRoute<HomeScreenRouteProp>();
    const idUser = route.params?.id;

    const navigator = useNavigation();


    // Importar ícones
    const delIcon = require('./../../assets/trash.png');
    const squareIcon = require('./../../assets/square.png');
    const checkIcon = require('./../../assets/check.png');

    const { width } = Dimensions.get('window');
    const boxSize = width - 60;
    const taskDescSize = width - 140;
    // Função para buscar dados do usuário
    const fetchUserData = async () => {
        try {
            const response = await axios.get<UserData>(`http://192.168.1.13:8080/api/users/${idUser}`);
            setUserData(response.data);
        } catch (error) {
            console.error("Erro ao buscar dados do usuário:", error);
        }
    };

    useEffect(() => {

        
        fetchUserData();

        navigator.setOptions({
            title: `Bem vindo(a), ${userData?.name}`
        })
    }, [userData]);

    const handlePostTask = async () => {
        if (taskTitle != "") {

            try {
                const response = await axios.post<any>('http://192.168.1.13:8080/api/tasks/add', {
                    task: {
                        title: taskTitle,
                        description: "",
                        status: 1
                    },
                    userId: idUser
                });

                setTaskTitle("")
                fetchUserData()

            } catch (error) {
                console.log(error)

            }
        }
        else {
            alert("Preencha todos os campos")
        }


    }

    const handleDelTask = async (id: number | string) => {
        try {
            const response = await axios.delete<any>(`http://192.168.1.13:8080/api/tasks/del/${id}`);
            fetchUserData()

        } catch (error) {
            console.log(error)

        }
    }

    const handlePutTask = async (id: number|string, status: number|string)=>{

        try {
            const response = await axios.put<any>(`http://192.168.1.13:8080/api/tasks/update/${id}`,{
                status: status
            });
            fetchUserData()

        } catch (error) {
            console.log(error)

        }

    }

    const countTask = (status: string): number => {
        let count: number = 0;
        if (status === "PROCESS" && userData?.tasks) {
            userData.tasks.forEach((item) => {
                if (item.status === "PROCESS") {
                    count += 1;
                }
            });
        } else if (status === "DONE" && userData?.tasks) {
            userData.tasks.forEach((item) => {
                if (item.status === "DONE") {
                    count += 1;
                }
            });
        }
        return count;
    };


    return (
        <View style={{ paddingHorizontal: 20,  height: "100%", backgroundColor: "#304163" }}>
            <View style={styleInput.inputContainer}>

                <View style={styleInput.inputView}>
                    <TextInput
                        placeholder='Digite a nova tarefa'
                        placeholderTextColor="#999"
                        onFocus={() => "setIsFocused(true)"}
                        onBlur={() => "setIsFocused(false)"}
                        style={[styleInput.inputLogin, { width: boxSize }]}
                        value={taskTitle}
                        onChangeText={t => setTaskTitle(t)}
                    />
                </View>

                <Pressable
                    style={styleInput.addButton}
                    onPress={handlePostTask}
                >

                    <Text style={styleInput.add}>+</Text>

                </Pressable>
            </View>

            <View style={styleInfos.containerInfo}>

                <View style={styleInfos.boxInfo}>
                    <Text style={styleInfos.title}>Cadastradas</Text>
                    <Text style={[styleInfos.number, { color: "#000" }]}>{userData?.tasks.length}</Text>
                </View>

                <View style={styleInfos.boxInfo}>
                    <Text style={styleInfos.title}>Em aberto</Text>
                    <Text style={[styleInfos.number, { color: "#E88A1A" }]}>{countTask("PROCESS")}</Text>
                </View>

                <View style={styleInfos.boxInfo}>
                    <Text style={styleInfos.title}>Finalizadas</Text>
                    <Text style={[styleInfos.number, { color: "#0E9577" }]}>{countTask("DONE")}</Text>
                </View>

            </View>

            <View style={styleTask.container}>
                <View>
                    <Text style={{ color: "#fff" }}>Em aberto:</Text>
                </View>

                <View>

                    {userData?.tasks &&

                        userData?.tasks.map((item) => (
                            item.status == "PROCESS" &&
                            <View key={item.id} style={styleTask.task}>
                                <Pressable
                                    style={[styleTask.status, { backgroundColor: "#E88A1A" }]}
                                    onPress={() => handlePutTask(item.id, 0)}
                                >
                                    <Image
                                        source={squareIcon}
                                    />
                                </Pressable>

                                <View style={[styleTask.description, { width: taskDescSize }]}>
                                    <Text style={{ color: "#fff" }}>{item.title}</Text>
                                </View>

                                <Pressable style={styleTask.del}
                                    onPress={() => handleDelTask(item.id)}
                                >
                                    <Image
                                        source={delIcon}
                                    />
                                </Pressable>
                            </View>


                        ))

                    }



                </View>
            </View>

            <View style={styleTask.container}>
                <View>
                    <Text style={{ color: "#fff" }}>Finalizadas:</Text>
                </View>

                <View>

                    {userData?.tasks &&

                        userData?.tasks.map((item) => (
                            item.status == "DONE" &&
                            <View key={item.id} style={styleTask.task}>
                                <Pressable style={[styleTask.status, { backgroundColor: "#0E9577" }]}
                                    onPress={() => handlePutTask(item.id, 1)}>
                                    <Image
                                        source={checkIcon}
                                    />
                                </Pressable>

                                <View style={[styleTask.description, { width: taskDescSize }]}>
                                    <Text style={{ color: "#fff" }}>{item.title}</Text>
                                </View>

                                <Pressable style={styleTask.del} onPress={() => handleDelTask(item.id)}>
                                    <Image
                                        source={delIcon}
                                    />
                                </Pressable>
                            </View>


                        ))

                    }
                </View>
            </View>
        </View>
    )
}