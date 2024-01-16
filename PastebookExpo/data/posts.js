import {USERS} from './users'
export const POSTS = [
    {
        imageUrl: 'https://aphrodite.gmanetwork.com/imagefiles/1000/1502196869_1090319843_15_ent.jpg',
        user: USERS[0].user,
        likes: 201,
        caption: 'Normal Armored',
        profile_picture: USERS[0].image,
        comments: [
            {
                user: 'Dingdong Dentist',
                comment: 'Wow ang galing!',
            },
            {
                user: 'Josiah',
                comment: 'WEH!',
            },
        ]
    },
    {
        imageUrl: 'https://i.kym-cdn.com/entries/icons/original/000/032/353/Screen_Shot_2020-01-07_at_2.56.59_PM.png',
        user: USERS[1].user,
        likes: 201,
        caption: 'Normal Armored',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'Armored Clavio',
                comment: 'Wow ang galing!',
            },
            {
                user: 'Josiah',
                comment: 'WEH!',
            },
        ]
    }
]