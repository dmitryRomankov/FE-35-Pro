import { createSlice } from "@reduxjs/toolkit";

const posts = [
  {
    id: 1,
    image:
      "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
    text: "Post-1",
    date: "2021-10-06",
    lesson_num: 123,
    title: "фывфывфыв",
    author: 7,
    liked: false,
  },
  {
    id: 2,
    image:
      "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_17.37.38.png",
    text: "TPost-2",
    date: "2021-10-07",
    lesson_num: 48,
    title: "Title",
    author: 7,
    liked: false,
  },
  {
    id: 3,
    image: "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed.jpeg",
    text: "Post-3",
    date: "2021-10-07",
    lesson_num: 23,
    title: "B-52!",
    author: 97,
    liked: false,
  },
  {
    id: 4,
    image: "https://loremflickr.com/640/480/nature",
    text: "Post-4",
    date: "2021-10-08",
    lesson_num: 23,
    title: "Don't Be Cruel",
    author: 97,
    liked: false,
  },
  {
    id: 5,
    image: "https://loremflickr.com/640/480/cats",
    text: "Post-5",
    date: "2021-10-08",
    lesson_num: 23,
    title: "I Believe I Can Fly",
    author: 97,
    liked: false,
  },
  {
    id: 6,
    image: "https://loremflickr.com/640/480/nightlife",
    text: "Post-6",
    date: "2021-10-08",
    lesson_num: 23,
    title: "I'm Sorry",
    author: 97,
    liked: false,
  },
];

const initialPostsState = {
  posts,
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  reducers: {
    likePost(state, action) {
      const post = state.posts.find((post) => post.id === action.payload)
      post.liked = !post.liked;
    },
    favPost(state, action) {
      const post = state.posts.find((post) => post.id === action.payload)
      post.fav = !post.fav;
    },
  },
});

export const { likePost, favPost } = postsSlice.actions;

export default postsSlice.reducer;