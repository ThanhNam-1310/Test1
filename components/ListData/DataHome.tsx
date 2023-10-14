import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const DataHome = () => {
    const ListItem = [
        {
            id: 'i_01',
            image: require('../../assets/images/image_1.jpg')
        },
        {
            id: 'i_02',
            image: require('../../assets/images/image_2.jpg')
        },
        {
            id: 'i_03',
            image: require('../../assets/images/image_3.jpg')
        },
        {
            id: 'i_04',
            image: require('../../assets/images/image_4.jpg')
        },
        {
            id: 'i_05',
            image: require('../../assets/images/image_5.jpg')
        },
        {
            id: 'i_06',
            image: require('../../assets/images/image_6.jpg')
        },
    ]

    // const renderItem = ({item, index}) => {
    //     return(
    //         <View>
    //             <Image source={item.image }></Image>
    //         </View>
    //     )
    // }
  return (
    <View>
      <Text>DataHome</Text>
    </View>
  )
}

export default DataHome

const styles = StyleSheet.create({})