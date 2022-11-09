import React from 'react'
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView, Button } from 'react-native';
const { width, height } = Dimensions.get('screen');
import {faker} from '@faker-js/faker'



faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
    return {
        key: faker.datatype.uuid(),
        image: 'https://www.meme-arsenal.com/memes/d956d1dc006d59bbbf3894265db1bb8c.jpg',
        name: 	faker.name.fullName(),
        jobTitle: faker.name.jobTitle(),
        email: faker.internet.email(),
        purpose: faker.hacker.phrase()
    };
});

import logo from '../assets/loanbg.jpg'

const SPACING = 20;
const AVATAR_SIZE = 70;
const BUTTON_CONTAINER_SIZE = 38
const ITEM_SIZE = AVATAR_SIZE + BUTTON_CONTAINER_SIZE + SPACING * 6 + 5
const stage = 'approved'

const AdvisorsRequests = () => {
    const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View>
        <Image
        source={{
            uri: 'https://wallpapercave.com/wp/UWnMCrJ.jpg'
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
                        <View style={styles.details}>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.title}>Adviser Name                                    </Text>
                                <Text style={styles.status_approved}>Approved</Text>
                            </View>
                            <Text style={styles.subtitle}>Ravindu Wickramasinghe</Text>
                            <Text style={styles.subtitle}>{"\n"}</Text>

                            <View style={styles.detailsContainer}>
                            <Text style={styles.title}>Category</Text>
                            </View>
                            <Text style={styles.description}>Finance Advisor</Text>
                        </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.title}>{"\n"}</Text>
                    <Button 
                        title='View More Details'
                        color='#0BCE83' />
                </View>
            </Animated.View>
        }}
    />
    </View>
  )
}

export default AdvisorsRequests

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
    statusBar: {
        flexDirection: 'row'
    },
    status_approved: {
        fontWeight: 'bold',
        padding: 2,
        paddingStart: 5,
        paddingEnd: 5,
        borderWidth: 1,
        borderColor: '#ACADBC',
        borderRadius: 6,
        maxWidth: 80,
        maxHeight: 25,
        backgroundColor: '#D6FFDA'
    },
    status_pending: {
        fontWeight: 'bold',
        padding: 2,
        paddingStart: 5,
        paddingEnd: 5,
        borderWidth: 1,
        borderColor: '#ACADBC',
        borderRadius: 6,
        maxWidth: 80,
        maxHeight: 25,
        backgroundColor: '#F2E1A6'
    },
    status_inspecting: {
        fontWeight: 'bold',
        padding: 2,
        paddingStart: 5,
        paddingEnd: 5,
        borderWidth: 1,
        borderColor: '#ACADBC',
        borderRadius: 6,
        maxWidth: 80,
        maxHeight: 25,
        backgroundColor: '#FFF5FE'
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
    },
    root: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 18,
        fontWeight: '700',
        maxWidth: '70%',
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
    details: {
        flexShrink: 1
    }
})