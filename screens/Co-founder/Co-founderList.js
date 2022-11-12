import React, { useState } from "react";
import SPACING from "../../config/SPACING";
import { BlurView }from 'expo-blur'
import { Ionicons } from "@expo/vector-icons";
import colors from "../../config/colors";
import SearchField from "../../componenets/SearchField";
import coffees from "../../config/CoFounders";
import { StatusBar } from "expo-status-bar";
import { CardViewContainer } from "../../componenets/styles";
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    Dimensions,
  } from "react-native";
    
  const avatar = require("../../assets/img/Welcome.jpg");
  
  const { width } = Dimensions.get("window");
  
  const CofounderList = () => {
  const [activeCategoryId] = useState(null);
  
return (
  <CardViewContainer>
    <StatusBar style="dark" />
      <SafeAreaView>
        <ScrollView
          style={{
            padding: SPACING,
          }}
        >
          <View style={{ width: "100%", marginVertical: SPACING * 3 }}>
            <Text
              style={{
                color: colors.black,
                fontSize: SPACING * 3.5,
                fontWeight: "600",
              }}
            >
              Find a Co-Founder
            </Text>
          </View>
          <SearchField />
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
            }}
          >
            {coffees
              .filter((coffee) => {
                if (activeCategoryId === null) {
                  return true;
                }
                return coffee.categoryId === activeCategoryId;
              })
              .map((coffee) => (
                <View
                  key={coffee.id}
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
                    >
                      <Image
                        source={coffee.image}
                        style={{
                          width: "100%",
                          height: "100%",
                          borderRadius: SPACING * 2,
                        }}
                      />
                    </TouchableOpacity>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: colors.white,
                        fontWeight: "600",
                        fontSize: SPACING * 1.7,
                        marginTop: SPACING,
                        marginBottom: SPACING / 50,
                      }}
                    >
                      {coffee.name}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{
                        color: colors.white,
                        fontWeight: "300",
                        fontSize: SPACING * 1.7,
                        marginTop: SPACING,
                        marginBottom: SPACING / 2,
                      }}
                    >
                      {coffee.name}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{ color: colors["white-smoke"], fontSize: SPACING * 1.2 }}
                    >
                      {coffee.included}
                    </Text>
                   
                    <View
                      style={{
                        marginVertical: SPACING / 2,
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginLeft: SPACING*5
                      }}
                    >
                      
                      <TouchableOpacity
                        style={{
                          backgroundColor: colors.primary,
                          padding: SPACING / 2,
                          borderRadius: SPACING,
                        }}
                      >
                        <View style={{ flexDirection: "row"}}>
                        <Text
                          style={{
                            color: colors.white,
                            fontSize: SPACING * 1.6,
                          }}
                        >
                          Quick View
                        </Text>
                     
                        <Ionicons
                          name="add"
                          size={SPACING * 2}
                          color={colors.white}
                        />
                         </View>
                      </TouchableOpacity>
                    </View>
                  </BlurView>
                </View>
              ))}
          </View>
        </ScrollView>
      </SafeAreaView>
      </CardViewContainer>
    );
  };
  
  export default CofounderList;
  
  const styles = StyleSheet.create({});
  