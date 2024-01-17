import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const SettingsScreen = () => {
  const accountItems = [
    { icon: "person-outline", text: "Edit Profile" },
    { icon: "security", text: "Security" },
    { icon: "notifications-none", text: "Notifications" },
    { icon: "lock-outline", text: "Privacy" },
  ];

  const supportItems = [
    { icon: "credit-card", text: "My Subscription" },
    { icon: "help-outline", text: "Help & Support" },
    { icon: "info-outline", text: "Terms and Policies" },
  ];

  const cacheAndCellularItems = [
    { icon: "delete-outline", text: "Free up space" },
    { icon: "save-alt", text: "Date Saver" },
  ];

  const renderSettingsItem = ({ icon, text }) => (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 8,
        paddingLeft: 12,
        backgroundColor: "#fff",
      }}
    >
      <MaterialIcons name={icon} size={24} color="black" />
      <Text
        style={{
          marginLeft: 36,
          fontSize: 16,
        }}
      >
        {text}{" "}
      </Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <View
        style={{
          marginHorizontal: 12,
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 20 }}>Settings</Text>
      </View>

      <ScrollView style={{ marginHorizontal: 12 }}>
        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 18, marginVertical: 10 }}>Account</Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: "#ccc",
            }}
          >
            {accountItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 18, marginVertical: 10 }}>
            Support & About{" "}
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: "#ccc",
            }}
          >
            {supportItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={{ fontSize: 18, marginVertical: 10 }}>
            Cache & Cellular{" "}
          </Text>
          <View
            style={{
              borderRadius: 12,
              backgroundColor: "#ccc",
            }}
          >
            {cacheAndCellularItems.map((item, index) => (
              <React.Fragment key={index}>
                {renderSettingsItem(item)}
              </React.Fragment>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingsScreen;
