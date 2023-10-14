import React from "react";
import { View, Text, Button, StyleSheet, Image, ImageBackground, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';

const Welcome = ({navigation}: any) => {
  return (
    <View style={styles.container}>
            <ImageBackground source={require('../../assets/background.jpg')} style={styles.backgrond_welcome} resizeMode='cover'>
                <View style={styles.view}>
                    <View style={{flexDirection: 'row', padding: 10, margin: 10}}>
                    <Text style={{
                            fontSize: 28, 
                            color: 'red',
                            fontWeight: '600',
                            marginHorizontal: 15,
                            textAlign:'center'}}>Good+</Text>
                    <AntDesign name="star" size={28} color="yellow" />
                    <AntDesign name="star" size={28} color="yellow" />
                    <AntDesign name="star" size={28} color="yellow" />
                    </View>
                    <Text style={styles.textstyle}>Welcome to F-Food</Text>
                    <TouchableOpacity 
                        style={styles.TouchableHandle}
                        onPress={() => navigation.navigate('Home')}
                    >
                        <Text style={styles.Text_Touchable}>Let's Go</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
            
        </View>
  )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#F9C983',
        backgroundColor: '#fff',
    },
    textstyle: {
        color: 'white',
        fontSize: 30,
        fontWeight: '700',
        marginBottom: 20,
        textAlign:'center'
    },

    view: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 500
    },

    TouchableHandle: {
        backgroundColor: '#f96163',
        borderRadius: 15,
        width: '80%',
        alignItems: 'center',
        paddingVertical: 18,
        marginBottom: 80,
    },
    Text_Touchable: {
        fontSize: 20, 
        color: '#fff', 
        fontWeight: '700',
    },
    backgrond_welcome: {
        flex: 1,
        justifyContent: 'center',
    }
})