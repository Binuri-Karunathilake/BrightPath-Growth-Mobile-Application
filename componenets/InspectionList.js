import React from 'react'
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView, Button } from 'react-native';
const { width, height } = Dimensions.get('screen');
import {faker} from '@faker-js/faker'



faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
    return {
        key: faker.datatype.uuid(),
        image: 'https://loremflickr.com/cache/resized/65535_52440891686_c2b21da412_c_640_480_nofilter.jpg',
        name: faker.name.fullName(),
        nic: faker.datatype.number(),
    };
});

import logo from '../assets/loanbg.jpg'

const SPACING = 20;
const AVATAR_SIZE = 120;
const BUTTON_CONTAINER_SIZE = 40
const ITEM_SIZE = AVATAR_SIZE + BUTTON_CONTAINER_SIZE + SPACING * 6 + 5

const InspectionList = () => {
    const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View>
        <Image
        source={{
            uri: 'https://images.pexels.com/photos/4386406/pexels-photo-4386406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={10}
        />
      <Animated.FlatList
        contentContainerStyle={styles.flatlist}
        onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {y: scrollY}}}],
            { useNativeDriver: true}
        )}
        data={DATA}
        keyExtractor={item => item.key}
        renderItem={({item, index}) => {
            const inputRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + 2)
            ]

            const opactiyRange = [
                -1,
                0,
                ITEM_SIZE * index,
                ITEM_SIZE * (index + 1)
            ]

            const scale = scrollY.interpolate(
                {
                    inputRange,
                    outputRange: [1,1,1,0]
                }
            )

            const opacity = scrollY.interpolate(
                {
                    inputRange: opactiyRange,
                    outputRange: [1,1,1,0]
                }
            )
            return <Animated.View style={[styles.imageView, {opacity, transform: [{scale}]}]}>
                <View style={styles.detailsContainer}>
                    <Image
                        source={{
                            uri: 'https://loremflickr.com/cache/resized/65535_52440891686_c2b21da412_c_640_480_nofilter.jpg'
                        }}
                        style={styles.image}
                        />
                        <View style={styles.details}>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.title}>{item.name}</Text>
                            </View>
                            <Text style={styles.subtitle}>{item.nic}</Text>

                            <View style={[{ width: "80%", margin: 10, backgroundColor: "red" }]}>
                            <Button title='Update'
                                color='#0BCE83'/>
                            <Button title='Delete'
                                color='#0BCE83'/>
                            </View>
                        </View>
                </View>
            </Animated.View>
        }}
    />
    </View>
  )
}

export default InspectionList

const styles = StyleSheet.create({
    flatlist: {
        padding: SPACING,
        paddingTop: StatusBar.currentHeight
    },
    imageView: {
        padding: SPACING,
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        borderRadius: 12,
        marginBottom: SPACING,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 1,
        shadowRadius: 20,
    },
   
    detailsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SPACING/2
    },
    buttonContainer: {
        height: BUTTON_CONTAINER_SIZE,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: SPACING
    },
    image: {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        borderRadius: AVATAR_SIZE,
        marginRight: SPACING/2
    },
    root: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 17,
        fontWeight: '700',
        maxWidth: '100%',
    },
    subtitle: {
        fontSize: 14,
        opacity: .7
    },
    description: {
        fontSize: 12,
        opacity: .8,
        color: '#0099cc'
    },
  
})