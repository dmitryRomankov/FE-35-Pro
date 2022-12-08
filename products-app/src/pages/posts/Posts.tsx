import React from "react";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { likePost } from "../../store/post-slice";

import "./styles.scss"

export const Posts = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id}>
          <img className="posts__image" src={post.image} alt={post.title} />
          <p>{post.text}</p>
          <p
            className={
              post.liked ? "posts__like posts__like--liked" : "posts__like"
            }
            onClick={() => dispatch(likePost(post.id))}
          >
            ❤
          </p>
        </div>
      ))}
    </div>
  );
};
