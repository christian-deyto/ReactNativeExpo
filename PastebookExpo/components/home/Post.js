import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import FAB from 'react-native-elements/dist/buttons/FAB';

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/48/000000/like--v1.png',
        likeImageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v2.png',
    },
    {
        name:'Comment',
        imageUrl: 'https://img.icons8.com/material-outlined/24/filled-topic.png',
    }
]

const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30}}>
    <Divider width={1} orientation='vertical' />
      <PostHeader post={post}/>
      <PostImage post={post} />
      <PostFooter />
    </View>
  )
}

const PostHeader = ({post}) => (
    <View style = {{
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    margin: 5, 
    alignItems: 'center',
    }}>
        <View style={{flexDirection: 'row', alignItems:'center'}}>
            <Image source={post.profile_picture}
            style={styles.dp} />
            <Text style={{
                color: '#00008B',
                marginLeft: 5,
                fontWeight: '700',
            }}>
                {post.user}
            </Text>
        </View>
    </View>
)

const PostImage = ({ post }) => (
    <View style= {{
        width: '100%',
        height: 450,
    }}>
    <Image
      source={{ uri: post.imageUrl }}
      style={{ height: '100%', resizeMode: 'cover' }}
    />
    </View>
  )

  const PostFooter = () => (
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
  )

const Icon = ({imgStyle, imgUrl}) => (
<TouchableOpacity>
    <Image style={imgStyle} source={{uri:imgUrl}} />
</TouchableOpacity>
    )

const styles = StyleSheet.create({
    dp: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.6,
        borderColor: '#00008B',
    },

    footerIcon: {
        width: 33,
        height: 33,
    }
})

export default Post