import React, { useEffect, useState } from "react";
import { useAppSelector, AppDispatch, useAppDispatch } from "../../store/store";
import { favoritePost } from "../../store/favorite-slice";
import { PostsPreview } from "./postPreview/PostPreview";
import { PostsSmall } from "./postSmall/PostSmall";
import "./posts.css";
import { getPosts } from "../../store/api-slice";
import { useSelector } from "react-redux";
import { postsSelector } from "../../store/selectors";

export const Posts = () => {
  const posts = useSelector(postsSelector);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <div className="posts-wrapper">
      <ul className="posts-list">
        {posts.map((i: any, index: any) => {
          return (
            <li className="post-item" id={i.id} key={i.id}>
              <div className="posts-wrap">
                <PostsPreview
                  imgClassName="post-image"
                  itemImgClassName="posts-item-image"
                  postsItemTitleClassName="posts-item-tittle"
                  postsItemDateClassName="posts-item-date"
                  data={i}
                />
                <div
                  onClick={() => dispatch(i.id)}
                  className={
                    i.favorite
                      ? "fa-solid fa-bookmark"
                      : "fa-regular fa-bookmark"
                  }
                ></div>
              </div>
            </li>
          );
        })}
      </ul>
      <ul className="posts-small-list">
        {posts.map((i: any, index: any) => {
          return (
            <li className="post-small-item" key={index}>
              <div className="posts-small-wrap">
                <PostsSmall data={i} />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Posts;
