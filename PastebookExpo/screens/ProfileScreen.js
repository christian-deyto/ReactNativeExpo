import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/white.jpg')}
          resizeMode="cover"
          style={styles.coverImage}
        />
      </View>

      <View style={styles.profileDetails}>
        <Image
          source={require('../assets/julia.jpg')}
          resizeMode="contain"
          style={styles.profileImage}
        />
        <Text style={styles.name}>Julia Burrito</Text>
        <Text style={styles.bio}>Bakit di malungkot si Jesus? Kasi Messiah sya.</Text>

        <View style={styles.countContainer}>
          <View style={styles.countItem}>
            <Text style={styles.count}>122</Text>
            <Text style={styles.label}>Followers</Text>
          </View>
          <View style={styles.countItem}>
            <Text style={styles.count}>67</Text>
            <Text style={styles.label}>Following</Text>
          </View>
        </View>

        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addFriendButton}>
            <Text style={styles.buttonText}>Add Friend</Text>
          </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    width: "100%",
  },
  coverImage: {
    height: 228,
    width: "100%",
  },
  profileDetails: {
    flex: 1,
    alignItems: "center",
  },
  profileImage: {
    height: 155,
    width: 155,
    borderRadius: 999,
    borderColor: 'pink',
    borderWidth: 2,
    marginTop: -90,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    marginVertical: 8,
  },
  bio: {
    color: 'gray',
  },
  countContainer: {
    paddingVertical: 8,
    flexDirection: "row",
  },
  countItem: {
    flexDirection: "column",
    alignItems: "center",
    marginHorizontal: 20,
  },
  count: {
    color: "pink",
    fontSize: 16,
  },
  label: {
    color: "pink",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginVertical: 12,
  },
  editProfileButton: {
    width: 124,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F875AA",
    borderRadius: 10,
    marginRight: 8,
  },
  addFriendButton: {
    width: 124,
    height: 36,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00008B",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
  },
});

export default ProfileScreen;
