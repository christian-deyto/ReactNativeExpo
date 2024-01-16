import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'https://img.icons8.com/fluency-systems-regular/48/000000/like--v1.png',
        likeImageUrl: 'https://img.icons8.com/fluency-systems-regular/60/ffffff/like--v2.png',
    },
    {
        name:'Comment',
        imageUrl: 'https://img.icons8.com/material-outlined/48/speech-bubble--v1.png',
    }
]

const Post = ({post}) => {
  return (
    <View style={{marginBottom: 30}}>
    <Divider width={1} orientation='vertical' />
      <PostHeader post={post}/>
      <PostImage post={post} />
      <View style={{marginHorizontal: 15, marginTop: 10}}>
      <PostFooter />
      <Likes post={post} />
      <Caption post={post} />
      <CommentsSection post={post} />
      </View>
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
<View style={{flexDirection:'row'}}>
    <View style={styles.footerIconContainer}>
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[0].imageUrl} />
    <Icon imgStyle={styles.footerIcon} imgUrl={postFooterIcons[1].imageUrl} />
</View>
</View>
)

const Likes = ({post}) => (
    <View style={{flexDirection: 'row', marginTop: 4}}>
    <Text style={{color: '#00008B', fontWeight: '600'}}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
)

const Caption = ({post}) => (
    <View style={{marginTop: 1}}>
    <Text>
        <Text style={{color: '#00008B', fontWeight:'600'}}>{post.user}</Text>
        <Text> {post.caption}</Text>
    </Text>
    </View>
)

const Icon = ({imgStyle, imgUrl}) => (
<TouchableOpacity>
    <Image style={imgStyle} source={{uri:imgUrl}} />
</TouchableOpacity>
)

const CommentsSection = ({post}) => (
    <Text style={{color:'gray'}}>Hi</Text>
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
    },

    footerIconContainer: {
        flexDirection: 'row',
        width: '20%',
        justifyContent: 'space-between'
    }
})

export default Post