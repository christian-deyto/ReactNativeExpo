import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Fontisto } from "@expo/vector-icons";
import { Image, View, TouchableOpacity, Platform } from "react-native";
import ProfileScreen from "../../screens/ProfileScreen";

const Tab = createBottomTabNavigator();

const styles = {
  container: {
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: 0,
    marginTop: 25,
  },

  iconStyle: (focused) => ({
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: focused ? '#F875AA' : '#7E57C2',
    borderWidth: 2,
    borderColor: focused ? '#F875AA' : '#7E57C2',
  }),
};

const homeTabStyles = {
  container: (focused) => ({
    // Additional styles specific to the "Home" tab
    // For example, you can add margin or padding if needed
  }),
  image: (focused) => ({
    ...styles.iconStyle(focused),
    // Additional styles specific to the "Home" tab icon
  }),
};

const profileTabStyles = {
  container: (focused) => ({
    borderRadius: 30, // Make it circular
    // Additional styles specific to the "Profile" tab
    // For example, you can add margin or padding if needed
  }),
  image: (focused) => ({
    ...styles.iconStyle(focused),
    // Additional styles specific to the "Profile" tab icon
  }),
};


const plusTabStyles = {
  container: (focused) => ({
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#F875AA',
    height: Platform.OS == "ios" ? 50 : 60,
    width: Platform.OS == "ios" ? 50 : 60,
    top: Platform.OS == "ios" ? -10 : -20,
    borderRadius: Platform.OS == "ios" ? 25 : 30,
    borderWidth: 2,
    borderColor: '#fff', // Updated border color
  }),
  image: (focused) => ({
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: focused ? "#F875AA" : "#7E57C2",
    borderWidth: 1,
    borderColor: focused ? "#F875AA" : "#7E57C2",
  }),
};

const BottomTabs = ({ navigation }) => {
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
      backgroundColor: "#fff",
    },
  };

  const renderIcon = (focused, iconName, iconSize, iconColor, onPress) => {
    let containerStyle;
    let imageStyle;
  
    if (iconName === "home") {
      containerStyle = homeTabStyles.container(focused);
      imageStyle = homeTabStyles.image(focused);
    } else if (iconName === "plus-a") {
      containerStyle = plusTabStyles.container(focused);
      imageStyle = plusTabStyles.image(focused);
    } else {
      containerStyle = profileTabStyles.container(focused);
      imageStyle = profileTabStyles.image(focused);
    }
  
    return (
      <TouchableOpacity onPress={onPress} style={containerStyle}>
        {iconName === "home" ? (
          <MaterialCommunityIcons
            name={iconName}
            size={iconSize}
            color={iconColor}
          />
        ) : iconName === "plus-a" ? (
          <Fontisto name={iconName} size={iconSize} color="#fff" />
        ) : (
          <Image
            source={require('../../assets/selfie.jpg')}
            style={imageStyle}
          />
        )}
      </TouchableOpacity>
    );
  };
  
  
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={ProfileScreen} // Replace with the actual Home component
        options={{
          tabBarIcon: ({ focused }) =>
            renderIcon(focused, "home", 24, focused ? "#F875AA" : "#7E57C2", () => {}),
        }}
      />

      <Tab.Screen
        name="Post"
        component={ProfileScreen} // Replace with the PostScreen component
        options={{
          tabBarIcon: ({ focused }) =>
            renderIcon(focused, "plus-a", 24, "#fff", () => {}),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) =>
            renderIcon(focused, "profile", 24, focused ? "#F875AA" : "#7E57C2", () => {
              // Navigate to ProfileScreen on press
              navigation.navigate("ProfileScreen");
            }),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
