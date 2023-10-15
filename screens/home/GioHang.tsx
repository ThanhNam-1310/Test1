import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import { FlatList } from 'react-native';
import { FoodItem } from '../../service/interface/interface';
import { TouchableOpacity } from 'react-native';

const GioHang = ({route, navigation}: any) => {
  const {item} = route.params || {};  //Kiểm tra xem item có tồn tại không. Nếu tồn tại thì hiển thị, không thì sẽ để trống.
  const [cart, setCart] = useState<FoodItem[]>([])
  // const [qty, setQty] = useState('1')
  //Thay đổi kích thước khác của ảnh.
  const [imgDimensions, setImgDimensions] = useState({width: 100, height: 100})

  //Thêm món vào giỏ hàng.
  useEffect(() => {
    //Kiểm tra xem sản phẩm đã có tồn tại trong giỏ hàng chưa.
    // const existingProduct = cart.find((product) => product.id === item.id);

    // Cập nhật giỏ hàng khi route params thay đổi (khi thêm sản phẩm mới)
    if (item) {
      // Sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng
      // existingProduct.qty = (existingProduct.qty || 1) + parseInt(qty);
      setCart([...cart, item]);
    }
  }, [item])

  // Hàm tính tổng số tiền
  const calculateTotalPrice = () => {
    let totalPrice = 0;

    // Duyệt qua các sản phẩm trong giỏ hàng và tính tổng giá
    for (const product of cart) {
      totalPrice += parseInt(product.price);
    }

    return totalPrice;
  };

  return (
   <>
      <View style={{flex: 1}}>
        <Header/>
        
        <FlatList data={cart}
          renderItem={({ item }) => (
            <View style={{paddingVertical: 6, flex: 1}}>
            <View style={styles.boder}>
              <Image source={item.uri} style={{width: imgDimensions.width, height: imgDimensions.height, borderRadius:10}}/>
              <View style={{ alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 20, flex: 1 }}>
                <Text style={{ fontSize: 20, fontWeight: '600', textAlign: 'left' }}>{item.name}</Text>
                <Text style={{ fontSize: 12, marginVertical: 10 }}>{item.detail}</Text>
                <Text style={{ fontSize: 22, textAlign: 'right', fontWeight: '500', paddingLeft: 40 }}>
                  {item.price} ₫</Text>
                
              </View>
            </View>
            </View>
          )}
          keyExtractor={(item) => `cartItem-${item.id}`}
          style={{backgroundColor: 'white'}}
        />
        <View style={{ alignItems: 'center', borderWidth: 1, paddingTop: 5, backgroundColor: 'white'}}>
          <Text style={{paddingVertical: 10, fontSize: 20, fontWeight: '600', }}>Tổng số tiền: {calculateTotalPrice()}.000 ₫</Text>
          <TouchableOpacity style={styles.but} onPress={() => {}}>
              <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>THANH TOÁN</Text>
          </TouchableOpacity>
        </View>
      </View>
   </>
  )
}

export default GioHang

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10
  },
  boder: {
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
    
  },
  images:{
    borderRadius: 15
  },
  but: {
    backgroundColor:'red',
    borderRadius: 30,
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: 20,
    marginBottom: 20,
    width: '90%',
    // justifyContent: 'center'
  }
})