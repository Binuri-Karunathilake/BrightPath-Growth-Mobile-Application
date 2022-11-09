import React from 'react'
import { Image, Animated, Text, View, Dimensions, StyleSheet, StatusBar, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('screen');
import { Entypo } from '@expo/vector-icons';
import Constants from 'expo-constants';

const articleParagraphs = [
    {title: 'What is a loan?', description: 'One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy. '},
    {title: 'What is a lease?', description: 'Folly words widow one downs few age every seven. If miss part by fact he park just shew. Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education is be dashwoods or an. Use off agreeable law unwilling sir deficient curiosity instantly. Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow equal an share least. '},
    {title: 'How do you obtain one?', description: 'Another journey chamber way yet females man. Way extensive and dejection get delivered deficient sincerity gentleman age. Too end instrument possession contrasted motionless. Calling offence six joy feeling. Coming merits and was talent enough far. Sir joy northward sportsmen education. Discovery incommode earnestly no he commanded if. Put still any about manor heard. '},
    {title: 'How do pay one back?', description: 'Village did removed enjoyed explain nor ham saw calling talking. Securing as informed declared or margaret. Joy horrible moreover man feelings own shy. Request norland neither mistake for yet. Between the for morning assured country believe. On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe uncivil respect. Always get adieus nature day course for common. My little garret repair to desire he esteem. '},
    {title: 'What are some consideration you should make?', description: 'In it except to so temper mutual tastes mother. Interested cultivated its continuing now yet are. Out interested acceptance our partiality affronting unpleasant why add. Esteem garden men yet shy course. Consulted up my tolerably sometimes perpetual oh. Expression acceptance imprudence particular had eat unsatiable. '},
    {title: 'Frequently asked questions', description: 'Had denoting properly jointure you occasion directly raillery. In said to of poor full be post face snug. Introduced imprudence see say unpleasing devonshire acceptance son. Exeter longer wisdom gay nor design age. Am weather to entered norland no in showing service. Nor repeated speaking shy appetite. Excited it hastily an pasture it observe. Snug hand how dare here too. '}
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
                            <Image style={styles.image} source={{uri: 'https://images.pexels.com/photos/7620697/pexels-photo-7620697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
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
    },
    icon: {
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
    },
});