import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const postFooterIcons = [
    {
        name: 'Like',
        imageUrl: 'heart-outline',
        likeImageUrl: 'heart',
    },
    {
        name:'Comment',
        imageUrl: 'comment-outline',
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
      <Comments post={post} />
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

const Icon = ({ imgStyle, imgUrl }) => (
    <TouchableOpacity>
      <MaterialCommunityIcons
        name={imgUrl}
        size={30}
        color="#F875AA"
        style={imgStyle}
      />
    </TouchableOpacity>
  )  

const CommentsSection = ({post}) => (
    <View style={{marginTop:1}}>
    {!!post.comments.length && (
    <Text style={{color:'gray'}}>
        View{post.comments.length > 1 ? ' all' : ''} {post.comments.length}{' '}
        {post.comments.length > 1 ? 'comments':'comment'}
    </Text>
    )}
    </View>
)

const Comments = ({post}) => (
    <>
    {post.comments.map((comment, index) => (
        <View key={index} style={{flexDirection:'row', marginTop: 1}}>
            <Text>
                <Text style={{color:'#00008B', fontWeight:'600'}}>
                    {comment.user}
                </Text>
                {' '}{comment.comment}
            </Text>
        </View>
    ))}
    </>
    )

const styles = StyleSheet.create({
    dp: {
        width: 35,
        height: 35,
        borderRadius: 50,
        marginLeft: 6,
        borderWidth: 1.4,
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