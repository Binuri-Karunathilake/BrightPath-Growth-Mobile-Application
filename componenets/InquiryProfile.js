import React from 'react'
import { Image, Animated, Text, View, Dimensions, StyleSheet, StatusBar, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const { width, height } = Dimensions.get('screen');
import { Entypo } from '@expo/vector-icons';
import Constants from 'expo-constants';

import {
    StyledContainer,
    InnerContrainer,
    PageTitle,
    StyledFormArea,
    LeftIcon, 
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    StyleButton,
    ButtonText,
    Colors,
    Line,
    MsgBox,
    ExtraText,
    ExtraView,
    TextLink,
    TextLinkContent,
    StyledTextInput1,
    StyleButton1,
    StyledTextInput2,
    StyledTextInput3
  }from './styles';
  import COLORS from './Colors';
  


const text = {title: 'What is a loan?', description: 'One advanced diverted domestic sex repeated bringing you old. Possible procured her trifling laughter thoughts property she met way. Companions shy had solicitude favourable own. Which could saw guest man now heard but. Lasted my coming uneasy marked so should. Gravity letters it amongst herself dearest an windows by. Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode no listening of. Before nature his parish boy. ',
                type: 'Lease',
                financialInstitute: 'Bank of Ceylon',
                interestRate: 22.9,
                period: 24,
                amount: 1200000,
                history: 'Village did removed enjoyed explainer man feelings own shy. Request norland neither ssured country believe. On even feet time have an no at. Relation so in confined smallest children unpacked delicate. Why sir end believe'}
const user = {name: "Marty Byrde", jobTitle: "Architect", contactNumber: '0714548475', address: 'somewhere and nowhere'}
const getImage = (i) => `https://source.unsplash.com/600x${400 + i}/?blackandwhite`;

const InquiryProfile = () => {
    const [selected, setSelected] = React.useState("");
  
    const type = [
      { label: 'Loan', value: 'Pending' },
      { label: 'Lease', value: 'Processing' },
    ];
  

  
      //const [value, setValue] = useState(null);
      //const [isFocus1, setIsFocus1] = useState(false);

      //const [condition, setCondition] = useState('');
     const [leaseType, setLeaseType] = useState('');
      // const [brand, setbrand] = useState('');
      // const [model, setmodel] = useState('');
      // const [amount, setAmount] = useState(0);
     // const [bankName, setBankName] = useState('');
      // const [interestRate, setInterestRate] = useState(0);
      // const [reason, setReason] = useState('');
  
  return (
    <SafeAreaView>
        <StatusBar hidden />
        <ScrollView style={styles.ScrollView}>
            <Text style={styles.heading}>{text.type==='Loan'? 'Loan ': 'Lease '}Details</Text>
                        <View>
                            <Image style={styles.image} source={{uri: 'https://images.pexels.com/photos/7620697/pexels-photo-7620697.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'}} />
                            <Text style={styles.features}>{user.name}</Text>
                            <Text style={styles.features}>{user.jobTitle}</Text>
                            <Text style={styles.features}>{user.contactNumber}</Text>
                            <Text style={styles.features}>{user.address}</Text>
                            <Text style={styles.features}>Request Type : {text.type}</Text>
                            <Text style={styles.questions}>Reason : </Text>
                            <Text style={styles.paragraph}>{text.description}</Text>
                        </View>
                        <Dropdown
                        style={[styles.dropdown, isFocus1 && { borderColor: '#00b300' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={type}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!isFocus1 ? 'Lease/Loan' : '...'}
                        searchPlaceholder="Search..."
                        value={leaseType}
                        onFocus={() => setIsFocus1(true)}
                        onBlur={() => setIsFocus1(false)}
                        onChange={item => {
                          // handleChange('leaseType')
                          setLeaseType(item.value)
                          setIsFocus1(false);
                        }}
                        renderLeftIcon={() => (
                          <Octicons name='multi-select' size={20} color={COLORS.brand} style={{ marginHorizontal: 10 }} />
                        )}
                      />
                        
                       
        </ScrollView>
       
    </SafeAreaView>
  )
}

export default InquiryProfile


const styles = StyleSheet.create({
    featuredImage: {
        width: 50,
        height: 50,
        resizeMode: 'cover',
        marginRight: 20,
        borderRadius: 10,
    },
    calcs: {
        padding: 20,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: '#ffff',
        margin: 15,
        minHeight: 200,
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
    features: {
        fontWeight: '500',
        fontSize: 15,
        marginBottom: 15,
        color: '#1d1f1e',
        fontFamily: 'monospace',

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