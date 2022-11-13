import React from 'react'
import { Image, Animated, Text, View, Dimensions, StyleSheet, StatusBar, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('screen');
import { Entypo } from '@expo/vector-icons';
import Constants from 'expo-constants';

const articleParagraphs = [
    {title: 'What is a loan?', image: 'https://images.pexels.com/photos/7620697/pexels-photo-7620697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', description: 'In finance, a loan is the lending of money by one or more individuals, organizations, or other entities to other individuals, organizations, etc. The recipient incurs a debt and is usually liable to pay interest on that debt until it is repaid as well as to repay the principal amount borrowed.'},
    {title: 'What is a lease?', image: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2021/02/960x0_43.jpg', description: "You should be aged between 18 and 60 years./nYou need to be a confirmed employee of an organization acceptable to the Bank with a minimum of one year in confirmed employment./nMinimum salary or your regular monthly net income should be Rs 50,000/-, to apply for a Personal Loan./nThe loan should be fully repaid before the date of retirement./nYour regular income should be directed to an account at Commercial Bank (which could be opened for this purpose) from which the monthly payments could be deducted."},
    {title: 'How do you obtain one?', image: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/11/960x0.jpeg-2.jpg',  description: 'Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. '},
    {title: 'How do pay one back?', image: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2020/12/roofline.jpg', description: 'You have the option of choosing between an equated or a reducing balance payment schemes. /nMaximum repayment period of Personal Loans is 5 years. The maximum repayment period will depend on your age and remaining years of service.'},
    {title: 'What are some consideration you should make?', image: 'https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2020/07/gettyimages-1147981126-612x612-1-e1594758700905.jpg' , description: 'Increasingly, loan advertisements and telemarketers are telling you how easy it is to borrow money by flaunting low interest rates and simple application processes that tempt you into getting your hands on money for spending. In fact, borrowing money is never that simple. Before you borrow, be sure to carefully consider why you are borrowing and how you are going to repay the money back. Borrowing is not necessarily bad if it helps to make you better off, not worse off, in the long run. Such borrowing can be for your education, to buy a property, etc. Consider these five questions before taking out a loan.'},
    ];

const questions = {

}

const getImage = (i) => `https://source.unsplash.com/600x${400 + i}/?blackandwhite`;

const LoanLeaseDetails = () => {
  return (
    <SafeAreaView>
        <StatusBar hidden />
        <ScrollView style={styles.ScrollView}>
            <Text style={styles.heading}>Loan and Lease Details</Text>
            {articleParagraphs.map((text, index) => {
                return (<View key={index}>
                            <Image style={styles.image} source={{uri: text.image}} />
                            <Text style={styles.questions}>{text.title}</Text>
                            <Text style={styles.paragraph}>{text.description}</Text>
                        </View>)
            })}
        </ScrollView>
        <Pressable style={[styles.bottomActions, { paddingHorizontal: 20, justifyContent: 'center' }]}>
            <View style={{ flexDirection: 'row', height: 60, alignItems: 'center', justifyContent: 'center' }}>
                <Entypo name='shop' size={24} color='black' style={{ marginHorizontal: 10 }} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                {/* <View style={[styles.icon]}>
                    <Entypo name='export' size={24} color='black' />
                </View>
                <View style={[styles.icon]}>
                    <Entypo name='credit' size={24} color='green' />
                </View>
                <View style={[styles.icon]}>
                    <Entypo name='share-alternative' size={24} color='black' />
                </View> */}
                    <Text>View Banks</Text>

            </View>
        </Pressable>
    </SafeAreaView>
  )
}

export default LoanLeaseDetails


const styles = StyleSheet.create({
    featuredImage: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        marginRight: 20,
        borderRadius: 10,
    },
    bottomActions: {
        height: 80,
        backgroundColor: '#e5a865',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: 20,
        paddingBottom: 30
    },
    image: { width: '100%', height: height * 0.4, resizeMode: 'cover', marginBottom: 20 },
    featuredTitle: {
        fontSize: 24,
        fontWeight: '800',
        marginVertical: 20,
    },
    heading: {
        fontSize: 32,
        fontWeight: '800',
        marginBottom: 30,
    },
    paragraph: {
        flex: 1,
        marginBottom: 10,
        // fontFamily: 'Georgia'
        fontSize: 14,
        lineHeight: 16 * 1.5,
    },
    questions: {
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 8
    },
    ScrollView: {
        padding: 10,
        marginTop: 40
    },
    icon: {
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
});