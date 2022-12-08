import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IPost {
  id: number;
  image: string;
  text: string;
  date: string;
  lesson_num: number;
  title: string;
  author: number;
  liked: boolean;
}

const posts: IPost[] = [
  {
    id: 1,
    image:
      "https://tms-studapi-dev.s3.amazonaws.com/media/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA_%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0_2021-08-04_%D0%B2_16.11.10.png",
    text: "фыв",
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
    text: "Text",
    date: "2021-10-07",
    lesson_num: 48,
    title: "Title",
    author: 7,
    liked: false,
  },
  {
    id: 3,
    image: "https://tms-studapi-dev.s3.amazonaws.com/media/unnamed.jpeg",
    text: "Hello!",
    date: "2021-10-07",
    lesson_num: 23,
    title: "B-52!",
    author: 97,
    liked: false,
  },
];

interface InitialPostState {
  posts: IPost[];
}

const initialPostsState: InitialPostState = {
  posts,
};

const postsSlice = createSlice({
  name: "posts",
  initialState: initialPostsState,
  reducers: {
    likePost(state: InitialPostState, action: PayloadAction<number>) {
      const post = state.posts.find((post) => post.id === action.payload);
      post.liked = !post.liked;
    },
  },
});

export const { likePost } = postsSlice.actions;

export default postsSlice.reducer;
