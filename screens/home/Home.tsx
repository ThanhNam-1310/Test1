import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TouchableOpacity, ScrollView, Image, Dimensions} from "react-native";

import Header from "../../components/header/header";
import ListCategory from "../../components/ListData/ListCategory";
import Carsouse from "../../components/ListData/Carsouse";
import DatMua from "../../components/header/DatMua";
import ListProduct from "../../components/ListData/ListProduct";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

// const Tab = createBottomTabNavigator();

const Home = ({navigation}: any) => {
    const screnWidth = Dimensions.get('screen').width
    // console.log(screnWidth);
    
    const [currentImage, setCurrentImage] = useState(0);

    const productData = [
        {id:1, title: 'MÓN MỚI', image: require('../../assets/image_list_product/MON_MOI.jpg')},
        {id:2, title: 'COMBO NHÓM', image: require('../../assets/image_list_product/COMBO_NHOM.jpg')},
        {id:3, title: 'GÀ RÁN - GÀ QUAY', image: require('../../assets/image_list_product/Ga_Ran.jpg')},
        {id:4, title: 'BURGER - CƠM - MỲ', image: require('../../assets/image_list_product/COM.jpg')},
        {id:5, title: 'THỨC ĂN NHẸ', image: require('../../assets/image_list_product/Thuc_An_Nhe.jpg')},
        {id:6, title: 'ĐỒ UỐNG - TRÁNG MIỆNG', image: require('../../assets/image_list_product/TRANG_MIENG.jpg')},
    ]
    
    const renderProduct = ({item}: any) => {
        return (
            <View>
                <TouchableOpacity>
                    <Image source={item.image} style={{width: '100%', height: 150}}/>
                    <Text style={styles.text_contents}>{item.title}</Text>
                </TouchableOpacity>
            </View>
        )
    }
  return (
    <>
    <View style={{flex: 1}}>
    {/* <SafeAreaView style={{backgroundColor: 'blue',}}> */}
        <Header style={styles.header}/>
        <ScrollView style={{flex: 1}}>
            <StatusBar/>
            <View style={{justifyContent: 'center'}}>
                <DatMua/>
                <View style={{paddingVertical: 20, position: 'absolute', paddingTop: 140, paddingLeft: 80}}>
                    <TouchableOpacity onPress={() => navigation.navigate('Dat_Hang')} style={styles.TouchableHandle}>
                        <Text style={styles.Text_Touchable}>Bắt đầu đặt hàng ngay </Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* Tạo nút ấn để chuyển tiếp hình ảnh.
            <View>
                <Image source={images[currentImage]} style={styles.image} />
                <View style={styles.buttonContainer}>
                    <Button title="Trở lại" onPress={prevImage} disabled={currentImage === 0} />
                    <Button title="Tiếp theo" onPress={nextImage} disabled={currentImage === images.length - 1} />
                </View>
            </View>
             */}
            <View>
                <Carsouse/>
            </View>
            <ListProduct/>
            
            <ListCategory/>
                
        </ScrollView>  
        {/* </SafeAreaView> */}
    </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    content_1:{
        backgroundColor: 'black',
        alignItems:'center',
        height: 150,
    },
    text_content_1: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
        marginHorizontal: 15,
    },
    Text_Touchable: {
        fontSize: 20, 
        color: '#fff', 
        fontWeight: '700',
    },
    TouchableHandle: {
        // backgroundColor: '#f96163',
        backgroundColor:'red',
        borderRadius: 30,
        alignItems: 'center',
        paddingVertical: 18,
        paddingHorizontal: 20,
        marginBottom: 80,
    },
    text_contents: {
        fontSize: 15,
        fontWeight: '700'
    },
    product: {
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        paddingTop: 8,
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: 60,
        paddingTop: 100
    }
})