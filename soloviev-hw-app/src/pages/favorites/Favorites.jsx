import React from "react";
import { useSelector } from "react-redux";
import { postSelector, favoritePostsIdSelector } from "../../store/selectors";

import "./Favorites.css";

export const Favorites = () => {
  const posts = useSelector(postSelector);
  const favoritePostsId = useSelector(favoritePostsIdSelector);

  return (
    <div className="posts">
      {posts.map((post) => {
        if (!favoritePostsId.includes(post.id)) return null;
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
