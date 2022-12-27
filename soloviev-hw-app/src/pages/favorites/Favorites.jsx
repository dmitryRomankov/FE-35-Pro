import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { likePost } from "../../store/post-slice";
import { postSelector } from "../../store/selectors";

import "./Favorites.css";

export const Favorites = () => {
  const posts = useSelector(postSelector);
  // const dispatch = useDispatch();

  return (
    <div className="posts">
      {posts.map((post) => {
        if (!post.fav) return null;
        else {
          return (
            <div key={post.id}>
              <img src={post.image} alt="postimage" />
              <p>{post.text}</p>
              <p
                className={
                  post.fav ? "posts__fav posts__fav--faved" : "posts__fav"
                }
              >
                ★
              </p>
            </div>
          );
        }
      })}
    </div>
  );
};
