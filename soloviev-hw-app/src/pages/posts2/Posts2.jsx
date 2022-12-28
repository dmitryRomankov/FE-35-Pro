import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { likePost, favPost, getPosts } from "../../store/post-slice";
import { postSelector } from "../../store/selectors";

import "./Posts2.css";

export const Posts2 = () => {
  
  const posts = useSelector(postSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <div className="card-list">
      {posts.map((post) => (
        <div key={post.id} className="card">
          <div className="data-block">
            <div className="card-date">{post.date}</div>
            <div className="card-title">{post.title}</div>
            <div className="card-text">{post.text}</div>
          </div>

          <div className="card-image">
            <img src={post.image} alt="post" />
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
        </div>
      ))}
    </div>
  );
};
