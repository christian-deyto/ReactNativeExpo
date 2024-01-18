import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../components/home/Header';
import Post from '../components/home/Post';
import { POSTS } from '../data/posts';
import BottomTabs, { bottomTabIcons } from '../components/home/BottomTabs';

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView>
        {POSTS.map((post, index) => (
            <Post post={post} />
        ))}
      </ScrollView>
      <BottomTabs navigation={navigation} icons={bottomTabIcons} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
});

export default HomeScreen;
