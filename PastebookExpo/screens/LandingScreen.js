import React from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const LandingScreen = () => {
  const navigation = useNavigation();

  const handleJoinPress = () => {
    // Navigate to the registration screen
    navigation.navigate('Register');
  };

  const handleAlreadyMemberPress = () => {
    // Navigate to the login screen
    navigation.navigate('Login');
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1 }}>
        <ImageBackground
          source={require('../assets/landingbg.jpg')}
          style={{
            flex: 1,
            resizeMode: 'cover',
            width: width,
            height: height,
            marginTop: 25,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              justifyContent: 'center',
              padding: 16,
            }}
          >
            <ScrollView horizontal>
              <Text
                style={{
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: 16,
                }}
              >
                Explore the vibrant community on Pastebook!{' '}
              </Text>
              {/* Repeat similar spans for other messages */}
            </ScrollView>

            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                flex: 40,
              }}
            >
              <Text
                style={{
                  fontSize: height > width ? 35 : 25,
                  color: 'white',
                  fontWeight: 'bold',
                  marginBottom: 10,
                }}
              >
                Welcome to Pastebook!
              </Text>
              <Text
                style={{
                  fontSize: height > width ? 19 : 14,
                  color: 'white',
                  marginBottom: 20,
                }}
              >
                Connecting Lives, One Post at a Time
              </Text>

              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  marginVertical: 10,
                }}
              >
                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                    borderWidth: 2,
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    backgroundColor: '#AEDEFC',
                  }}
                  onPress={handleJoinPress}
                >
                  <Text style={{ color: '#001F3F', fontSize: 16 }}>
                    Join Pastebook
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: 8,
                    borderWidth: 2,
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    backgroundColor: '#F875AA',
                  }}
                  onPress={handleAlreadyMemberPress}
                >
                  <Text style={{ color: 'white', fontSize: 16 }}>
                    Already a member?
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

export default LandingScreen;