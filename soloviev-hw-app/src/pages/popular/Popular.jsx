import React from "react";
import { useSelector } from "react-redux";
import { postSelector, popularPostsIdSelector } from "../../store/selectors";

import "./Popular.css";

export const Popular = () => {
  const posts = useSelector(postSelector);
  const popularPostsId = useSelector(popularPostsIdSelector);

  return (
    <div className="posts">
      {posts.map((post) => {
        if (!popularPostsId.includes(post.id)) return null;
        else {
          return (
            <div key={post.id}>
              <img src={post.image} alt="postimage" />
              <p>{post.text}</p>
              <p
                className={
                  post.liked ? "posts__like posts__like--liked" : "posts__like"
                }
              >
                ♥
              </p>
            </div>
          );
        }
      })}
    </div>
  );
};