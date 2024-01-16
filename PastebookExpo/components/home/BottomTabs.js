import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import { Divider } from 'react-native-elements'

export const bottomTabIcons = [
    {
        name: 'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/144/F875AA/home.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/144/F875AA/home.png',
    },
    {
        name: 'Post',
        active:'https://img.icons8.com/fluency-systems-filled/60/F875AA/plus-2-math.png',
        inactive:'https://img.icons8.com/fluency-systems-regular/60/F875AA/plus-2-math.png',
    },
    {
        name: 'Profile',
        active:'https://i.redd.it/gdz204qyuws31.jpg',
        inactive:'https://i.redd.it/gdz204qyuws31.jpg',
    }
]

const BottomTabs = ({icons}) => {
    const [activeTab, setActiveTab] = useState('Home')

    const Icon = ({icon}) => (
        <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source= {{uri: activeTab === icon.name ? icon.active : icon.inactive}} 
            style= {[
                styles.icon, 
                icon.name === 'Profile' ? styles.profilePic(): null,
                activeTab === 'Profile' && icon.name === activeTab 
                ? styles.profilePic(activeTab)
                : null,
                ]} />
        </TouchableOpacity>
    )
  return (
    <View style={styles.wrapper}>
        <Divider width={1} orientation='vertical' />
        <View style={styles.container}>
            {icons.map((icon, index) => (
                <Icon key={index} icon={icon} />
      ))}
    </View>
   </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        width: '100%',
        bottom: '0%',
        zIndex: 999,
        backgroundColor: '#fff',
    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: 50,
        paddingTop: 10,
    },
    icon: {
        width:30,
        height:30,
    },

    profilePic: (activeTab = '') => ({
        borderRadius:50,
        borderWidth: activeTab === 'Profile' ? 2 :0,
        borderColor: '#F875AA'
    })
})

export default BottomTabs