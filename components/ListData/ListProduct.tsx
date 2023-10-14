import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, FlatList } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const ListProduct = () => {
    const screenHeight = Dimensions.get('window').height;
    // console.log(screenHeight);
    const navigation = useNavigation();
    
    
    const productData = [
        {id: '01', title: 'MÓN MỚI', uri: require('../../assets/image_list_product/MON_MOI.jpg')},
        {id: '02', title: 'COMBO', uri: require('../../assets/image_list_product/COMBO_NHOM.jpg')},
        {id: '03', title: 'GÀ RÁN - GÀ QUAY', uri: require('../../assets/image_list_product/Ga_Ran.jpg')},
        {id: '04', title: 'BURGER - CƠM - MỲ', uri: require('../../assets/image_list_product/COM.jpg')},
        {id: '05', title: 'ĐỒ ĂN NHẸ', uri: require('../../assets/image_list_product/Thuc_An_Nhe.jpg')},
        {id: '06', title: 'ĐỒ UỐNG - TRÁNG MIỆNG', uri: require('../../assets/image_list_product/TRANG_MIENG.jpg')},
    ]

    //Hiển thị productData.
    const renderProduct = ({ item }: any) => {
        return (
            <View style={styles.border}>
                <TouchableOpacity >
                    <View style={{justifyContent: 'space-between', flexDirection: 'column',paddingBottom: 20}}>
                        <View style={{alignItems: 'center'}}>
                            <Image source={item.uri} style={{width: 180, height: 200, borderTopLeftRadius: 10, borderTopRightRadius: 10}} resizeMode="cover"/>
                        </View>
                        <View>
                            <Text style={{paddingVertical: 10, fontSize: 15, textAlign: 'left', paddingLeft: 7,}}>{item.title}</Text>
                            <MaterialIcons name="navigate-next" size={25} color="black" style={{position: 'absolute', right: 5, alignItems: 'flex-end', top: 5}}/>
                        </View>
                    </View>
                </TouchableOpacity>
                
            </View>
        )
    }

    //Khi ấn chuyển tới Tab Thực đơn.
    // const handleButton = () => {
    //     navigation.navigate()
    // }
  return (
    <>
        <View style={{backgroundColor: 'white', borderTopLeftRadius: 15, borderTopRightRadius: 15}}>
            <View style={{padding: 20}}>
                <Text style={{textAlign:'left', fontSize: 30, fontWeight: '700'}}>Danh mục món ăn</Text>
            </View>
            <FlatList columnWrapperStyle={styles.row}
                data={productData}
                renderItem={renderProduct}
                scrollEnabled={false}
                numColumns={2}
                keyExtractor={(item) => item.id}
                // horizontal
                />
        </View>

    </>
  )
}

export default ListProduct

const styles = StyleSheet.create({
    images:{
        width: '50%',
        height: 150,
        borderRadius: 15
    },
    sectionlist: {
        paddingHorizontal: 20
    },
    row: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    border: {
        flex: 1, 
        borderWidth: 1, 
        marginHorizontal: 5, 
        marginVertical: 10,
        borderRadius: 10,
        borderColor: 'white',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 4 },      //Khoảng cách ngang- dọc của đổ bóng.
        shadowOpacity: 0.6,     //Độ trong suốt của đổ bóng{nhạt: 0, đậm: 1}
        shadowRadius: 5,        //Bán kính đổ bóng.
        elevation: 5, // Đối với Android
    }
})