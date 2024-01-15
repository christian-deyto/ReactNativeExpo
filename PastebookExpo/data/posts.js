import {USERS} from './users'
export const POSTS = [
    {
        imageUrl: 'https://aphrodite.gmanetwork.com/imagefiles/1000/1502196869_1090319843_15_ent.jpg',
        user: USERS[0].user,
        likes: 7870,
        caption: 'Train Ride to Hogwarts',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'Dingdong Dentist',
                comment: 'Wow ang galing!',
            },
        ]
    }
]