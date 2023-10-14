import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image, SectionList } from 'react-native'
import React from 'react'
import Header from '../../components/header/header'

const DATA = [
    {
        title: 'MÓN MỚI',
        data:[
            {id:1, name:'1 Gà Que Kem Xốt Cajun', detail:'1 Gà Que Kem Xốt Cajun', price:'25.000', uri: require('../../assets/ThucDon/New_Food/1-Cajun.jpg')},
            {id:2, name:'2 Gà Que Kem Xốt Cajun', detail:'2 Gà Que Kem Xốt Cajun', price:'45.000', uri: require('../../assets/ThucDon/New_Food/2-Cajun.jpg')},
            {id:3, name:'Combo Gà Que Kem Xốt Cajun', detail:'1 Gà Que Kem Xốt Cajun + 1 Burger + 1 Pepsi Lon', price:'90.000', uri: require('../../assets/ThucDon/New_Food/A-Cajun.jpg')},
            {id:4, name:'Pepsi Không Calo Lon', detail:'Pepsi Không Calo Lon', price:'18.000', uri: require('../../assets/ThucDon/New_Food/pepsi-zero.jpg')},
            {id:5, name:'Combo Gà Zero HD', detail:'02 Miếng Gà Rán + 02 Gà Miếng Nuggets + 01 Pepsi Không Calo Lon', price:'95.000', uri: require('../../assets/ThucDon/New_Food/combo-pepsi-zero.jpg')},
        ]
    },
    {
        title: 'COMBO NHÓM',
        data:[
            {id:1, name:'Combo Nhóm 1', detail:'3 Miếng Gà + 1 Burger Zinger/Burger Tôm/Burger Phi-lê Gà Quay + 2 Lon Pepsi', price:'170.000', uri: require('../../assets/ThucDon/Combo_Nhom/D6.jpg')},
            {id:2, name:'Combo Nhóm 2', detail:'4 Miếng Gà + 1 Khoai tây chiên lớn / 2 Thanh Bí Phô-mai + 2 Pepsi Lon', price:'200.000', uri: require('../../assets/ThucDon/Combo_Nhom/D7-new.jpg')},
            {id:3, name:'Combo Nhóm 3', detail:'5 Miếng Gà + 1 Popcorn (Vừa) / 4 Gà Miếng Nuggets+ 2 Pepsi Lon', price:'230.000', uri: require('../../assets/ThucDon/Combo_Nhom/D8-new.jpg')},
        ]
    },
    {
        title: 'GÀ RÁN - GÀ QUAY',
        data:[
            {id:1, name:'1 Miếng Gà Rán', detail:'1 Miếng Gà Giòn Cay/Gà Truyền Thống/Gà Giòn Không Cay', price:'30.000', uri: require('../../assets/ThucDon/Chicken/1-Fried-Chicken.jpg')},
            {id:2, name:'2 Miếng Gà Rán', detail:'2 Miếng Gà Giòn Cay/Gà Truyền Thống/Gà Giòn Không Cay', price:'60.000', uri: require('../../assets/ThucDon/Chicken/2-Fried-Chicken.jpg')},
            {id:3, name:'3 Miếng Gà Rán', detail:'3 Miếng Gà Giòn Cay/Gà Truyền Thống/Gà Giòn Không Cay', price:'85.000', uri: require('../../assets/ThucDon/Chicken/3-Fried-Chicken.jpg')},
            {id:4, name:'1 Miếng Đùi Gà Quay', detail:'1 Miếng Đùi Gà Quay Giấy Bạc/Đùi Gà Quay Tiêu', price:'75.000', uri: require('../../assets/ThucDon/Chicken/BJ.jpg')},
            {id:5, name:'1 Miếng Phi-lê Gà Quay', detail:'1 Miếng Phi-lê Gà Quay Flava/Phi-lê Gà Quay Tiêu', price:'40.000', uri: require('../../assets/ThucDon/Chicken/MOD-PHI-LE-GA-QUAY.jpg')},
            {id:6, name:'3 Cánh Gà Hot Wings', detail:'3 Cánh Gà Hot Wings', price:'50.000', uri: require('../../assets/ThucDon/Chicken/3-HW.jpg')},
            {id:7, name:'5 Cánh Gà Hot Wings', detail:'5 Cánh Gà Hot Wings', price:'80.000', uri: require('../../assets/ThucDon/Chicken/5-HW.jpg')},
            {id:8, name:'3 Gà Miếng Nuggets', detail:'3 Gà Miếng Nuggets', price:'30.000', uri: require('../../assets/ThucDon/Chicken/3_Nuggests.jpg')},
            {id:9, name:'5 Gà Miếng Nuggets', detail:'5 Gà Miếng Nuggets', price:'50.000', uri: require('../../assets/ThucDon/Chicken/5_Nuggests.jpg')},
        ]
    },
    {
        title: 'BURGER - CƠM - MỲ Ý',
        data:[
            {id:1, name: 'BURGER ZINGER', detail: '1 Burger Zinger', price: '50.000', uri: require('../../assets/ThucDon/Burger_Com_My/Burger-Zinger.jpg')},
            {id:2, name: 'BURGER GÀ QUAY FLAVA', detail: '1 Burger Gà Quay Flava', price: '55.000', uri: require('../../assets/ThucDon/Burger_Com_My/Burger-Flava.jpg')},
            {id:3, name: 'BURGER TÔM', detail: '1 Burger Tôm', price: '44.000', uri: require('../../assets/ThucDon/Burger_Com_My/Burger-Shrimp.jpg')},
            {id:4, name: 'Com Gà Teriyaki', detail: '1 Cơm Gà Teriyaki', price:'45.000', uri: require('../../assets/ThucDon/Burger_Com_My/Rice-Teriyaki.jpg')},
            {id:5, name: 'Cơm Gà Bít-tết', detail: '1 Cơm Gà Bít-tết', price: '45.000', uri: require('../../assets/ThucDon/Burger_Com_My/Rice-Steak.jpg')},
            {id:6, name: 'MÌ Ý XỐT CÀ XÚC XÍCH GÀ ZINGER', detail: '1 Mì Ý Xốt Cà Xúc Xích Gà Zinger', price: '40.000', uri: require('../../assets/ThucDon/Burger_Com_My/MY-Y-ZINGER.jpg')},
            {id:7, name: 'MÌ Ý XỐT CÀ XÚC XÍCH GÀ VIÊN', detail: '1 Mì Ý Xốt Cà Xúc Xích Gà Viên', price: '40.000', uri: require('../../assets/ThucDon/Burger_Com_My/MY-Y-POP.jpg')},
        ]
    },
    {
        title: 'THỨC ĂN NHẸ',
        data:[
            {id: 1, name:'Salad Hạt', detail: '1 Salad Hạt', price: '30.000', uri: require('../../assets/ThucDon/Thuc_An_Nhe/SALAD-HAT.jpg')},
            {id: 2, name:'SALAD POP', detail: '1 Salad Hạt Gà Viên Popcorn', price: '40.000', uri:require('../../assets/ThucDon/Thuc_An_Nhe/SALAD-HAT-GA-VIEN.jpg')},
            {id: 3, name:'3 Cá Thanh', detail: '3 Cá Thanh', price: '40.000', uri:require('../../assets/ThucDon/Thuc_An_Nhe/3-Fishsticks.jpg')},
            {id: 4, name:'2 Xiên Que', detail: '2 Xiên Que', price: '20.000', uri:require('../../assets/ThucDon/Thuc_An_Nhe/2-Skewers.jpg')},
            {id: 5, name:'6 Phô Mai Viên', detail: '6 Phô Mai Viên', price: '30.000', uri:require('../../assets/ThucDon/Thuc_An_Nhe/6-Chewy-Cheese.jpg')},
            {id: 6, name:'Súp Rong Biển', detail: 'Súp Rong Biển', price: '15.000', uri:require('../../assets/ThucDon/Thuc_An_Nhe/Soup-Rong-Bien.jpg')},
        ]
    },
    {
        title: 'ĐỒ UỐNG - TRÁNG MIỆNG',
        data:[
            {id:1, name:'1 Bánh Trứng', detail:'1 Bánh Trứng', price:'', uri: require('../../assets/ThucDon/Drink/1-eggtart.jpg')},
            {id:2, name:'2 Viên Khoai Môn Kim Sa', detail:'2 Viên Khoai Môn Kim Sa', price:'', uri: require('../../assets/ThucDon/Drink/2-taro.jpg')},
            {id:3, name:'3 Thanh Bí Phô Mai', detail:'3 Thanh Bí Phô Mai', price:'', uri: require('../../assets/ThucDon/Drink/3-Pumcheese.jpg')},
            {id:4, name:'5 Thanh Bí Phô Mai', detail:'5 Thanh Bí Phô Mai', price:'', uri: require('../../assets/ThucDon/Drink/5-Pumcheese.jpg')},
            {id:5, name:'7 UP', detail:'7 UP Lon', price:'18.000', uri: require('../../assets/ThucDon/Drink/7Up-Can.jpg')},
            {id:6, name:'Pepsi', detail:'Pepsi Lon', price:'18.000', uri: require('../../assets/ThucDon/Drink/Pepsi-Can.jpg')},
            {id:7, name:'Aquafina', detail:'Aquafina 500ml', price:'10.000', uri: require('../../assets/ThucDon/Drink/Aquafina-500ml.jpg')},
            {id:8, name:'Trà Đào', detail:'Trà Đào', price:'15.000', uri: require('../../assets/ThucDon/Drink/Peach-Tea.jpg')},
        ]
    },
]


const ThucDon = ({navigation}: any) => {
  return (
    <><View>
          <Header />
          <ScrollView horizontal>
        <View style= {{flexDirection: 'row', paddingVertical: 5}}>
        <View style={styles.icon}>
            <TouchableOpacity>
                <Text style={styles.text}>MÓN MỚI</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.icon}>
            <TouchableOpacity>
                <Text style={styles.text}>COMBO NHÓM</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.icon}>
            <TouchableOpacity>
                <Text style={styles.text}>GÀ RÁN - GÀ QUAY</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.icon}>
            <TouchableOpacity>
                <Text style={styles.text}>BURGER - CƠM - MỲ Ý</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.icon}>
            <TouchableOpacity>
                <Text style={styles.text}>THỨC ĂN NHẸ</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.icon}>
            <TouchableOpacity>
                <Text style={styles.text}>ĐỒ UỐNG - TRÁNG MIỆNG</Text>
            </TouchableOpacity>
        </View>
    </View>
    </ScrollView>

          {/* <ListProduct/> */}
      </View>
      <SectionList sections={DATA}
          renderItem={({ item }) => (
              <View style={styles.border}>
                <TouchableOpacity onPress={() => navigation.navigate('Detail_Food',{item})} style={{ flexDirection: 'row', }}>
                <Image source={item.uri} style={styles.images} />
                  <View style={{ alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 20, flex: 1}}>
                      <Text style={{fontSize: 23, fontWeight: '600', textAlign: 'left',}}>{item.name}</Text>
                      <Text style={{fontSize: 17, marginBottom: 15}}>{item.detail}</Text>
                      <Text style={{fontSize: 22, textAlign: 'right', fontWeight: '500'}}>{item.price} ₫</Text>
                  </View>
                </TouchableOpacity>
              </View>
          )}
          renderSectionHeader={({ section }) => <Text style={{fontSize: 28, fontWeight: '800', paddingTop: 25, paddingBottom: 10}}>{section.title}</Text>}
          keyExtractor={item => `basicListEntry-${item.id}`} 
          style={styles.sectionlist}
          stickySectionHeadersEnabled={false}
          windowSize={5}/></>
  )
}

export default ThucDon

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    icon:{
    //   backgroundColor: 'white',
      paddingHorizontal: 10,
      paddingVertical: 15, 
      marginHorizontal: 5
    },
    text:{
        fontWeight: '700',
    },
    images:{
        width: '50%',
        height: 200,
        borderRadius: 15
    },
    sectionlist: {
        paddingHorizontal: 20,
        flex: 1
    },
    border: {
        flex: 1, 
        borderWidth: 1, 
        marginHorizontal: 5, 
        marginVertical: 10,
        borderRadius: 15,
        borderColor: 'white',
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 5, height: 4 },      //Khoảng cách ngang- dọc của đổ bóng.
        shadowOpacity: 0.6,     //Độ trong suốt của đổ bóng{nhạt: 0, đậm: 1}
        shadowRadius: 5,        //Bán kính đổ bóng.
        elevation: 5, // Đối với Android
    }
})