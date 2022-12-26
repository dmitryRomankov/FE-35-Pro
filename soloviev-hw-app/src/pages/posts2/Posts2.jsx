import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { likePost, favPost } from "../../store/post-slice";
import { postSelector, popularPostsIdSelector } from "../../store/selectors";

import "./Posts2.css";

export const Posts2 = () => {
  const posts = useSelector(postSelector);
  const dispatch = useDispatch();

  return (
    <div className="posts">
      {posts.map((post) => (
        <div key={post.id}>
          <img src={post.image} alt="postimage" />
          <p>{post.text}</p>
          <div className="posts__signs">
            <p
              className={
                post.fav ? "posts__fav posts__fav--faved" : "posts__fav"
              }
              title="Add to favorites"
              onClick={() => dispatch(favPost(post.id))}
            >
              ★
            </p>
            <p
              className={
                post.liked ? "posts__like posts__like--liked" : "posts__like"
              }
              title="Add like"
              onClick={() => dispatch(likePost(post.id))}
            >
              ♥
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
