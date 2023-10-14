import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../components/header/header";
import { AntDesign } from '@expo/vector-icons';
import { validateEmail } from "../../utils/validate";


const Login = ({navigation}: any) => {
    const [email, setEmail] = useState('')

    const handleLogin = async () => {
        if (! validateEmail(email)) {
            alert("Email không hợp lệ!")
        }
    }
    return (
    <View style={{flex: 1}}>
        <Header/>
        <ScrollView style={{flex: 1}}>
            <View style={{paddingHorizontal: 20, paddingTop: 60}}>
                <Text style={styles.mainText}>Đăng nhập</Text>
                <View style={styles.content}>
                    <TextInput placeholder="Địa chỉ E-mail" style={styles.inputText} 
                        value={email} onChangeText={(value) => setEmail(value)}/>
                    <TextInput placeholder="Mật khẩu" style={styles.inputText} secureTextEntry={true}/>
                </View>

                <View style={{paddingTop: 15, paddingHorizontal: 8}}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Text style={{textAlign: 'right'}}>Bạn quên mật khẩu?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.TouchableButton}>
                        <Text style={styles.TextButtons}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>

                <View style={{paddingVertical: 20}}>
                    <Text style={{fontSize: 20, fontWeight: '700'}}>Hoặc đăng nhập với</Text>
                    <View style={{flexDirection: 'row', justifyContent: 'center',paddingVertical: 10}}>
                        <TouchableOpacity style={{paddingHorizontal: 20}}>
                            <AntDesign name="facebook-square" size={50} color="blue" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingHorizontal: 20}}>
                            <AntDesign name="google" size={50} color="red" />
                        </TouchableOpacity>
                        <TouchableOpacity style={{paddingHorizontal: 20}}>
                            <AntDesign name="apple1" size={50} color="black" />
                        </TouchableOpacity>   
                    </View>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'center', paddingBottom: 30}}>
                    <Text>Bạn chưa có tài khoản?</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                        <Text style={{paddingHorizontal: 10, fontWeight:'600'}}>Đăng ký.</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Image source={require('../../assets/images/image_3.jpg')} style={{width: '100%', height: 500}}/>
        </ScrollView>
    </View>
    )
}
export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        padding: 20,
        marginTop: 70
    },
    mainText: {
        marginTop: 20,
        fontSize: 40,
        fontWeight: "900",
        paddingBottom: 20
    },
    content: {
        alignItems: "flex-start",
        width: "100%",
    },
    input: {
        borderWidth: 3,
        borderColor: "#bbb",
        padding: 10,
        borderRadius: 10,
        width: "100%",
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        marginTop: 20
    },
    // button: {
    //     borderWidth: 1,
    //     borderColor: "#000",
    //     padding: 15,
    //     borderRadius: 5,
    //     backgroundColor: "pink",
    //     width: "45%",
    //     alignItems: "center"
    // },
    TouchableButton: {
        backgroundColor: '#28A745',
        borderRadius: 40,
        width: '100%',
        alignItems: 'center',
        paddingVertical: 15,
        marginVertical: 5
    },
    TextButtons: {
        fontSize: 20, 
        color: '#fff', 
        fontWeight: '700'
    },
    inputText: {
        borderBottomWidth: 2,
        borderColor: 'gray',
        width: '100%',
        paddingVertical: 20, 
        paddingLeft: 15
    }
  })