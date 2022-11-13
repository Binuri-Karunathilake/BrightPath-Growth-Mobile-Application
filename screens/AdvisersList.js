import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,Pressable
} from "react-native";
import React, { useState } from "react";
import SPACING from "../navigators/config/SPACING";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import colors from "../navigators/config/colors";
import SearchField from "../componenets/SearchField";
//import Categories from "../components/Categories";
import advisors from "../navigators/config/advisors";
import {
  StyledContainer,
  InnerContrainer,
  PageLogo,
  PageTitle,
  SubTitle,
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
}from '../componenets/styles';
//const avatar = require("../../assets/avatar.jpg");
import Icon from 'react-native-ico-material-design';
import { StatusBar } from 'expo-status-bar';


var iconHight = 26;
var iconWidth = 26;


const { width } = Dimensions.get("window");

const AdvisersList = ({navigation}) => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  return (
    <SafeAreaView>
      <ScrollView
        style={{
          padding: SPACING,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {/* <TouchableOpacity
            style={{
              borderRadius: SPACING,
              overflow: "hidden",
              width: SPACING * 4,
              height: SPACING * 4,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons
                name="menu"
                size={SPACING * 2.5}
                color={colors.secondary}
              />
            </BlurView>
          </TouchableOpacity> */}
          {/* <View
            style={{
              width: SPACING * 4,
              height: SPACING * 4,
              overflow: "hidden",
              borderRadius: SPACING,
            }}
          >
            <BlurView
              style={{
                height: "100%",
                padding: SPACING / 2,
              }}
            >
              <Image
                style={{
                  height: "100%",
                  width: "100%",
                  borderRadius: SPACING,
                }}
                source={avatar}
              />
            </BlurView>
          </View> */}
        </View>
        <View style={{ width: "80%", marginVertical: SPACING * 3 }}>
          <Text
            style={{
              color: colors.dark,
              fontSize: SPACING * 3.5,
              fontWeight: "600",
              paddingLeft: 88,

            }}
          >
            Advisor list

          </Text>
        </View>
        <SearchField />
        {/* <Categories onChange={(id) => setActiveCategoryId(id)} /> */}
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {advisors
            .filter((advisor) => {
              if (activeCategoryId === null) {
                return true;
              }
              return advisor.categoryId === activeCategoryId;
            })
            .map((advisor) => (
              <View
                key={advisor.id}
                style={{
                  width: width / 2 - SPACING * 2,
                  marginBottom: SPACING,
                  borderRadius: SPACING * 2,
                  overflow: "hidden",
                }}
              >
                <BlurView
                  tint="dark"
                  intensity={95}
                  style={{
                    padding: SPACING,
                  }}
                >
                  <TouchableOpacity
                    style={{
                      height: 150,
                      width: "100%",
                    }}

                    onPress={() => {
                      console.log("Hello World");
                      navigation.navigate(advisor.url);
                  }}
                  >
                    <Image
                      source={advisor.image}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: SPACING * 2,
                      }}
                    />
                    <View
                      style={{
                        position: "absolute",
                        right: 0,
                        borderBottomStartRadius: SPACING * 3,
                        borderTopEndRadius: SPACING * 2,
                        overflow: "hidden",
                      }}
                    >
                      
                    </View>
                  </TouchableOpacity>
                  <Text
                    numberOfLines={2}
                    style={{
                      color: colors.white,
                      fontWeight: "600",
                      fontSize: SPACING * 1.7,
                      marginTop: SPACING,
                      marginBottom: SPACING / 2,
                    }}
                  >
                    {advisor.name}
                  </Text>
                  
                  
                </BlurView>
                
              </View>
              
            ))
                    

            
             
            





            }
        </View>

        <View>
        <StyledFormArea>
              <StyleButton  onPress={() => navigation.navigate('Request')}>
                          <ButtonText>Request new Advisor</ButtonText>
                      </StyleButton>
                      <Text> {"\n"} </Text>
                      <Text> {"\n"} </Text>
                      <Text> {"\n"} </Text>



            </StyledFormArea>
        </View>
      </ScrollView>


      <View style={StyleSheet.container}>

<StatusBar style="auto"/>


<View style={styles.NavContainer}>
<View style={styles.NavBar}>

    <Pressable onPress={() => {
                    navigation.navigate('HomeScreen');
                    }} style={styles.IconeBehave}
                    android_ripple={{borderless:true, radius:50}}>
        <Icon Icon name="home-button" group="material-design"  height={iconHight} width={iconWidth} color='#5E5E5E'/>
    </Pressable>
   

    <Pressable onPress={() => {
                        navigation.navigate('profile');
                    }} style={styles.IconeBehave}
    android_ripple={{borderless:true, radius:50}}>
        <Icon name="user-shape" group="material-design" height={iconHight} width={iconWidth} color='#5E5E5E'/>
    </Pressable>
    <Pressable onPress={() => {
                        navigation.navigate('Login');
                    }} style={styles.IconeBehave}
    android_ripple={{borderless:true, radius:50}}>
        <Icon name="forward-arrow" group="material-design" height={iconHight} width={iconWidth} color='#5E5E5E'/>
    </Pressable>
    
</View>

</View>
</View>






      
    </SafeAreaView>
  );
};

export default AdvisersList;

const styles = StyleSheet.create({container: {
  flex: 1,
  backgroundColor: '#',
  alignItems: 'center',
  justifyContent: 'center',
},

NavContainer: {
  position: 'absolute',
  alignItems: 'center',
  bottom: 0,
},

NavBar: {
  flexDirection:'row',
  backgroundColor:'#eee',
  width: '100%',
  justifyContent: 'space-evenly',
  borderRadius: 20
},
IconeBehave: {
  padding: 14
}

});
