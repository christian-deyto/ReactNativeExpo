import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ImageBackground,
  ScrollView,
  Switch,
  Platform,
  Modal,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const genderOptions = [
  { label: 'Select Gender', value: '' },
  { label: 'Male', value: '0' },
  { label: 'Female', value: '1' },
  { label: 'Others', value: '2' },
];

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handleRegister = () => {
    // Placeholder for registration logic
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirm Password:', confirmPassword);
    console.log('Birthday:', birthday);
    console.log('Gender:', gender);
    console.log('Mobile Number:', mobileNumber);
    // Add your registration logic here, for example, sending data to a server
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderItem = ({ item }) => (
    <TouchableHighlight
      underlayColor="#dddddd"
      onPress={() => {
        setGender(item.value);
        setModalVisible(false);
      }}
    >
      <View style={styles.modalItem}>
        <Text>{item.label}</Text>
      </View>
    </TouchableHighlight>
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        style={styles.imageBackground}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.container}>
            <View style={styles.overlay}>
              {/* Logo */}
              <Image
                source={require('../assets/logo-withoutbg.png')}
                style={styles.logo}
              />

              <Text style={styles.title}>Register</Text>

              <View style={styles.form}>
                <TextInput
                  style={styles.input}
                  placeholder="Username"
                  onChangeText={(text) => setUsername(text)}
                  value={username}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Email address"
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  secureTextEntry={!showPassword}
                  onChangeText={(text) => setPassword(text)}
                  value={password}
                />

                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  secureTextEntry={!showPassword}
                  onChangeText={(text) => setConfirmPassword(text)}
                  value={confirmPassword}
                />

                <View style={styles.passwordToggle}>
                  <Text>Show Password</Text>
                  <Switch
                    value={showPassword}
                    onValueChange={togglePasswordVisibility}
                    trackColor={{ false: '#767577', true: '#81b0ff' }}
                    thumbColor={Platform.OS === 'android' ? '#f4f3f4' : ''}
                    ios_backgroundColor="#3e3e3e"
                  />
                </View>

                <TextInput
                  style={styles.input}
                  placeholder="Birthday"
                  onChangeText={(text) => setBirthday(text)}
                  value={birthday}
                  keyboardType="numeric"
                />

                <TextInput
                  style={styles.input}
                  placeholder="Mobile Number"
                  onChangeText={(text) => setMobileNumber(text)}
                  value={mobileNumber}
                  keyboardType="phone-pad"
                />

                <View style={styles.pickerContainer}>
                  <TouchableHighlight
                    underlayColor="#dddddd"
                    onPress={() => setModalVisible(true)}
                  >
                    <View style={styles.modalButton}>
                      <Text>{gender || 'Gender'}</Text>
                    </View>
                  </TouchableHighlight>
                </View>

                <Modal
                  animationType="slide"
                  transparent={true}
                  visible={modalVisible}
                  onRequestClose={() => setModalVisible(false)}
                >
                  <View style={styles.modalContainer}>
                    <FlatList
                      data={genderOptions}
                      renderItem={renderItem}
                      keyExtractor={(item) => item.value}
                    />
                    <TouchableHighlight
                      underlayColor="#dddddd"
                      onPress={() => setModalVisible(false)}
                      style={styles.modalButton}
                    >
                      <Text>Cancel</Text>
                    </TouchableHighlight>
                  </View>
                </Modal>

                <TouchableOpacity
                  style={styles.registerButton}
                  onPress={handleRegister}
                >
                  <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.goBackButton}
                onPress={() => navigation.goBack()}
              >
                <Text style={styles.goBackText}>Go Back</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#fff',
  },
  form: {
    width: '80%',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 12,
    paddingLeft: 8,
    color: '#fff',
  },
  registerButton: {
    backgroundColor: '#F875AA',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  goBackButton: {
    backgroundColor: '#AEDEFC',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  goBackText: {
    color: '#001F3F',
    fontSize: 16,
  },
  passwordToggle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  pickerContainer: {
    marginBottom: 12,
  },
  pickerLabel: {
    color: '#fff',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalButton: {
    padding: 12,
    borderRadius: 8,
    borderColor: '#fff',
    borderWidth: 1,
  },
  modalItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default RegisterScreen;
