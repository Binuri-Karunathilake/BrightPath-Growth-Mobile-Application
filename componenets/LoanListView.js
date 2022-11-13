import React, { useEffect, useState } from 'react'
import { StatusBar, FlatList, Image, Animated, Text, View, Dimensions, StyleSheet, TouchableOpacity, Easing, SafeAreaViewBase, SafeAreaView, Button } from 'react-native';
const { width, height } = Dimensions.get('screen');
import {faker} from '@faker-js/faker'



faker.seed(10);
const DATA = [...Array(30).keys()].map((_, i) => {
    return {
        key: faker.datatype.uuid(),
        image: 'https://thumbs.dreamstime.com/b/manos-ejecutivas-sosteniendo-un-bol%C3%ADgrafo-e-indicando-d%C3%B3nde-firmar-contrato-en-la-oficina-primer-plano-de-ejecutivo-211497472.jpg',
        name: 	faker.name.fullName(),
        jobTitle: faker.name.jobTitle(),
        email: faker.internet.email(),
        purpose: faker.hacker.phrase()
    };
});

import logo from '../assets/loanbg.jpg'
import axios from 'axios';

const SPACING = 20;
const AVATAR_SIZE = 70;
const BUTTON_CONTAINER_SIZE = 38
const ITEM_SIZE = AVATAR_SIZE + BUTTON_CONTAINER_SIZE + SPACING * 6 + 5
const stage = 'approved'

const LoanListView = ({navigation}) => {

    const [loans, setLoans] = useState([]);

    const getLoans = async () => {
        const loans = await axios.get('https://bright-path-growth-hexclan.herokuapp.com/api/loan');
        console.log(loans.data);
        setLoans(loans.data.filter( (item) => {
            if(item.type === "Loan")
                return item
        } ));
    }

    const handleViewMore = () => {
        navigation.navigate('LoanLeaseInfo');
    }

    const scrollY = React.useRef(new Animated.Value(0)).current;

    useEffect(() => {
      getLoans();
    }, []);
    

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
        data={loans}
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
                            uri: 'https://thumbs.dreamstime.com/b/manos-ejecutivas-sosteniendo-un-bol%C3%ADgrafo-e-indicando-d%C3%B3nde-firmar-contrato-en-la-oficina-primer-plano-de-ejecutivo-211497472.jpg'
                        }}
                        style={styles.image}
                        />
                        <View style={styles.details}>
                            <View style={styles.detailsContainer}>
                                <Text style={styles.title}>{item.type}</Text>
                                {item.status=='pending'? (<Text style={styles.status_pending}>{item.status}</Text>) :
                                 item.status=='inspecting'? (<Text style={styles.status_inspecting}>{item.status}</Text>) :
                                  (<Text style={styles.status_approved}>{item.status}</Text>)}
                            </View>
                            <Text style={styles.subtitle}>{item.interestRate}</Text>
                            <Text style={styles.description}>{item.history}</Text>
                            <Text style={styles.description}>{item.bankName}</Text>
                        </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Text style={styles.title}>Rs. {item.amount}</Text>
                    <Button 
                        onPress={handleViewMore}
                        title='View More Details'
                        color='#0BCE83' />
                </View>
            </Animated.View>
        }}
    />
    </View>
  )
}

export default LoanListView

const styles = StyleSheet.create({
    flatlist: {
        padding: SPACING,
        paddingTop: StatusBar.currentHeight,

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
        flexShrink: 1,
        width: 220
    }
})