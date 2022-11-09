import React from 'react'
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView, Button } from 'react-native';
const { width, height } = Dimensions.get('screen');
import {faker} from '@faker-js/faker'



//====================dev variables start===========================
faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
    return {
        key: faker.datatype.uuid(),
        image: 'https://loremflickr.com/cache/resized/65535_52440891686_c2b21da412_c_640_480_nofilter.jpg',
        name: 	faker.name.fullName(),
        jobTitle: faker.name.jobTitle(),
        email: faker.internet.email(),
        purpose: faker.hacker.phrase()
    };
});

//====================dev variables end===========================

import logo from '../assets/loanbg.jpg'

const SPACING = 20;
const AVATAR_SIZE = 120;
const BUTTON_CONTAINER_SIZE = 38
const ITEM_SIZE = AVATAR_SIZE + BUTTON_CONTAINER_SIZE + SPACING * 6 + 5

//====================dev variables start===========================
const stage = 'approved'
const loanInterest = 12.5
const leaseInterest = 30


//====================dev variables end===========================

const FinancialInstitutions = () => {
    const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View>
        <Image
        source={{
            uri: 'https://images.pexels.com/photos/414144/pexels-photo-414144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        }}
        style={StyleSheet.absoluteFillObject}
        blurRadius={5}
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
                            uri: 'https://i.redd.it/a938db5q72l61.jpg'
                        }}
                        style={styles.image}
                        />
                        <View style={styles.details}>
                            <Text style={styles.title}>{item.name}</Text>
                            <Text style={styles.description}>{item.purpose}</Text>
                            <View style={styles.interestRates}>
                                <Text style={styles.subtitle}>Loan Interest : {loanInterest}</Text>
                                <Text style={styles.subtitle}>Lease Interest : {leaseInterest}</Text>
                            </View>
                        </View>
                        
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button}><Text>More info+</Text></TouchableOpacity>
                </View>
            </Animated.View>
        }}
    />
    </View>
  )
}

export default FinancialInstitutions

const styles = StyleSheet.create({
    flatlist: {
        padding: SPACING,
        paddingTop: StatusBar.currentHeight
    },
    imageView: {
        padding: SPACING,
        paddingBottom: SPACING/4,
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
        justifyContent: 'flex-end',
        maxHeight: 28,
        alignItems: 'center'
    },
    button: {
        borderRadius: 9,
        padding: 3,
        paddingHorizontal: 8,
        backgroundColor: '#0BCE83'
    },
    image: {
        width: AVATAR_SIZE,
        height: AVATAR_SIZE,
        borderRadius: 15,
        marginRight: SPACING/2
    },
    interestRates: {
        padding: 8,
        borderWidth: 2,
        borderColor: '#ACADBC',
        backgroundColor: '#ffff',
        marginTop: 5,
        borderRadius: 6
    },
    root: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
    },
    subtitle: {
        fontSize: 14,
        opacity: .7
    },
    description: {
        fontSize: 12,
        opacity: .8,
        color: 'black'
    },
    details: {
        flexShrink: 1
    }
})