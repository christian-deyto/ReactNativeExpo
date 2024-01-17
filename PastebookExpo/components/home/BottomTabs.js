import React from "react";
import { View, Text, Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {MaterialCommunityIcons, Fontisto} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const BottomTabs = () => {

  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarHideOnKeyboard: true,
    tabBarStyle: {
      position: "absolute",
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 60,
      backgroundColor: '#fff',
    },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={() => (
          <View style={styles.container}>
            <Text>Home Screen</Text>
          </View>
        )}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="home"
              size={24}
              color={focused ? '#F875AA' : '#7E57C2'}
            />
          ),
        }}
      />


      <Tab.Screen
        name="Create"
        component={() => (
          <View style={styles.container}>
            <Text>Create Screen</Text>
          </View>
        )}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: '#F875AA',
                height: Platform.OS == "ios" ? 50 : 60,
                width: Platform.OS == "ios" ? 50 : 60,
                top: Platform.OS == "ios" ? -10 : -20,
                borderRadius: Platform.OS == "ios" ? 25 : 30,
                borderWidth: 2,
                borderColor: '#fff', // Updated border color
              }}
            >
              <Fontisto name="plus-a" size={24} color="#fff" />
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={() => (
          <View style={styles.container}>
            <Text>Profile Screen</Text>
          </View>
        )}
        options={{
          tabBarIcon: ({ focused }) => (
            <Fontisto
              name="person"
              size={24}
              color={focused ? '#F875AA' : '#7E57C2'} // Updated icon color
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = {
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 0,
    marginTop: 25,
  },
};

export default BottomTabs;