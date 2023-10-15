import { Dimensions, StyleSheet, Text, View, Image, FlatList } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'

const Carsouse = () => {
    const flatListRef = useRef<FlatList>(null)

    //Dimensions
    const screenWidth = Dimensions.get('window').width;
    const [activeIndex, setActiveIndex] = useState(0)

    //Tự động chuyển hình ảnh.
    const AUTO_SCROLL_INTERVAL = 2000   //Thời gian tự chuyển hình ảnh (ms).

    useEffect(() => {
        const scrollInterval = setInterval(() => {
          // Tự động chuyển đến ảnh tiếp theo
          setActiveIndex((prevIndex) =>
            prevIndex === carsouseData.length - 1 ? 0 : prevIndex + 1
          );
        }, AUTO_SCROLL_INTERVAL);
    
        return () => {
          clearInterval(scrollInterval);
        };
      }, []);
    
    const getItemLayout = (data: any, index: number) => ({
      length: Dimensions.get('window').width,
      offset: Dimensions.get('window').width * index,
      index,
    });
    
    useEffect(() => {
      // Tự động cuộn đến ảnh tiếp theo khi activeIndex thay đổi
      flatListRef.current?.scrollToIndex({
        animated: true,
        index: activeIndex,
      });
    }, [activeIndex]);

    const carsouseData = [
        {id:'01', uri: require('../../assets/images/image_1.jpg')},
        {id:'02', uri: require('../../assets/images/image_2.jpg')},
        {id:'03', uri: require('../../assets/images/image_3.jpg')},
        {id:'04', uri: require('../../assets/images/image_4.jpg')},
        {id:'05', uri: require('../../assets/images/image_5.jpg')},
        {id:'06', uri: require('../../assets/images/image_6.jpg')},
    ]

    //Hiển thị Carsouse.
    const renderItem = ({item, index}: any) => {
        return (
            <View>
                <Image source={item.uri} style={{height: 450, width: screenWidth}}/>
            </View>
        )
    }

    //Hiển thị dấu chấm chỉ ảnh.
    const renderDotIndicators = () => {
        return(carsouseData.map((dot,index) => {
            //if index === active index
            if (activeIndex === index) {
                return(
                    <View 
                    key={index}
                    style={{
                        backgroundColor: 'white', 
                        height: 10, width: 30, 
                        borderRadius: 5, 
                        marginHorizontal: 6,
                        }}></View>
                )

            } else {
                return (
                    <View 
                    key={index}
                    style={{
                        backgroundColor: 'grey', 
                        height: 10, width: 10, 
                        borderRadius: 5, 
                        marginHorizontal: 6,
                        }}>   
                    </View>
                )
            }
            
        }))
    }
    
  return (
    <View>
        <FlatList 
                ref={flatListRef}
                getItemLayout={getItemLayout}
                data={carsouseData} 
                renderItem={renderItem} 
                keyExtractor={(item) => item.id}
                horizontal = {true}
                pagingEnabled = {true}
                showsHorizontalScrollIndicator={false}
                />

        <View style={{
            flexDirection: 'row', 
            justifyContent: 'center', 
            position: 'absolute', 
            backgroundColor: 'transparent',
            top: 425,
            left: screenWidth/3
            }}>
            {renderDotIndicators()}
        </View>
    </View>
  )
}

export default Carsouse

const styles = StyleSheet.create({})


