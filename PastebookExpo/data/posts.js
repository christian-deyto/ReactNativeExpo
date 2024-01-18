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
                user: 'Mel Tiyan Ko',
                comment: 'WEH!',
            },
        ]
    },
    {
        imageUrl: 'https://i.kym-cdn.com/entries/icons/original/000/032/353/Screen_Shot_2020-01-07_at_2.56.59_PM.png',
        user: USERS[1].user,
        likes: 201,
        caption: 'Yeah I am a dancer',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'Recharge Gutierrez',
                comment: 'Sample!',
            },
            {
                user: 'Tulina Magdangal',
                comment: 'Mala Step Up!',
            },
        ]
    },
    {
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNsN2x8JFtbJYSiJA-TQJB6uwtMihxV9Rs9UVVhY8lNmNzvqjGA_6F1m8CHHpTyWjYDzw&usqp=CAU',
        user: USERS[2].user,
        likes: 201,
        caption: 'With my pet, Piolo Askal :) WOOF!',
        profile_picture: USERS[2].image,
        comments: [
            {
                user: 'Jessica Soju',
                comment: 'So cute!!',
            },
            {
                user: 'Kuya Whale',
                comment: 'Gwapo naman!',
            },
        ]
    },
    {
        imageUrl: 'https://aphrodite.gmanetwork.com/entertainment/articles/original/watch__dingdong_dantes_easily_passed__tonight_with_arnold_clavio_s__diaper-changing_challenge_1457677481.jpg',
        user: USERS[1].user,
        likes: 201,
        caption: 'Armored and Dingdong BFF Forever!',
        profile_picture: USERS[1].image,
        comments: [
            {
                user: 'Armored Clavio',
                comment: 'Wow ang galing!',
            },
        ]
    }
]