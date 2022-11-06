import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  TextLink,
} from "react-native";
import React, { useState } from "react";
import SPACING from "../navigators/config/SPACING";
//import { BlurView } from "@react-native-community/blur";
import { Ionicons } from "@expo/vector-icons";
import colors from "../navigators/config/colors";
import SearchField from "../componenets/SearchField";
//import Categories from "../components/Categories";
import caards from "../navigators/config/caards";
//import { createStackNavigator, createAppContainer } from 'react-navigation';  
import Login from"../screens/Login";


const { width } = Dimensions.get("window");


const HomeScreen = () => {
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
              paddingLeft: 137,
              
            }}
          >
            Home
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
          {caards
            .filter((caard) => {
              if (activeCategoryId === null) {
                return true;
              }
              return caard.categoryId === activeCategoryId;
            })
            .map((caard) => (
              <View
                key={caard.id}
                style={{
                  width: width / 2 - SPACING * 2,
                  marginBottom: SPACING,
                  borderRadius: SPACING * 2,
                  overflow: "hidden",
                }}
              >

                {/* <BlurView
                  tint="dark"
                  intensity={95}
                  style={{
                    padding: SPACING,
                  }}
                > */}
                
                  <TouchableOpacity
                  
                    style={{
                      
                      height: 150,
                      width: "100%",
                    }}
                  >
                    <Image

                      source={caard.image}
                      
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
                      color: colors.dark,
                      fontWeight: "600",
                      
                      paddingLeft: 10,
                      fontSize: SPACING * 1.7,
                      marginTop: SPACING,
                      marginBottom: SPACING / 2,
                    }}
                  >
                    {caard.name}
                  </Text>
                  
                  
                  {/* </BlurView> */}
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
