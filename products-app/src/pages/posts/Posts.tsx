import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../../store/store";
import { getPosts, likePost } from "../../store/posts/post-slice";

import "./styles.scss";

export const Posts = () => {
  const { posts } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

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
