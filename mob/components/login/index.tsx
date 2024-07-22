import { Text, TextInput, View, Button, Alert } from "react-native"
import axios from 'axios'

import { style } from './loginCss';
import { useState } from "react";
import { UserData } from "../../interfaces";
import {useNavigation} from '@react-navigation/native'
import { LoginScreenNavigationProp } from "../../interfaces";

export const Login = () => {

    const [email, setEmail] = useState<any>();
    const [password, setPassword] = useState<any>();
    const [user, setUser] = useState<UserData>();

    const navigation = useNavigation<LoginScreenNavigationProp>();


    const handleVerifyLogin = async () => {
        if (email != "" && password != "") {
            const loginData: { email: string, password: string } = {
                email: email,
                password: password
            };

            try {
                const response = await axios.post<any>('http://192.168.1.13:8080/api/users/login', loginData);
               
                setUser(response.data);
                
                if(response.data != undefined){
                    navigation.navigate('Home', {id: response.data.id});
                }

            } catch (error) {
                console.log(error)

            }

            
        }
        else {
            alert("Preencha todos os campos")
        }

    }


    return (
        <View style={style.container}>
            <View style={style.logo}>
                <Text>Logo</Text>
            </View>

            <View style={style.titleContainer}>
                <Text style={style.title}>ToDo List - Lucas</Text>
                <Text style={style.title}>Entre com sua conta</Text>
            </View>

            <View style={style.inputContainer}>
                <View>
                    <Text style={style.label}>Email:</Text>
                    <TextInput
                        placeholder='Digite seu email'
                        placeholderTextColor="#999"
                        onFocus={() => "setIsFocused(true)"}
                        onBlur={() => "setIsFocused(false)"}
                        style={style.inputLogin}
                        value={email}
                        onChangeText={t => setEmail(t)}
                    />
                </View>

                <View>
                    <Text style={style.label}>Senha:</Text>
                    <TextInput
                        placeholder='Digite sua senha'
                        placeholderTextColor="#999"
                        onFocus={() => "setIsFocused(true)"}
                        onBlur={() => "setIsFocused(false)"}
                        secureTextEntry={true}
                        style={style.inputLogin}
                        value={password}
                        onChangeText={t => setPassword(t)}
                    />
                </View>

            </View>

            <Button
                title='Entrar'

                onPress={handleVerifyLogin}
            />
        </View>
    )
}