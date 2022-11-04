import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LoanListView = () => {
  return (
    <View>
      <FlatList
    data={DATA}
    keyExtractor={item => item.key}
    renderItem={({item, index}) => {
        return <View>
            <Image
                source={{uri: item.image}}
                style={{}}
                />
        </View>
    }}
    />
    </View>
  )
}

export default LoanListView

const styles = StyleSheet.create({
    imageView: {
        flexDirection: 'row'
    },
    image: {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        borderRadius: AVATAR_SIZE,

    }
})