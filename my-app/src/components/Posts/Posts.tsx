import React, { useEffect, useState } from "react";
import { PostsPreview } from "./postPreview/PostPreview";
import { PostsSmall } from "./postSmall/PostSmall";
import "./posts.css";
import data from "../response_1668708166439.json";
import { postsApi } from "../appConstants";
export let postsData = data.results;

export const Posts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(postsApi);
      const posts = await response.json();

      setPosts(posts);
    };
    fetchPosts();
  }, []);
  return (
    <div className="posts-wrapper">
      <ul className="posts-list">
        {posts.map((i: any, index: any) => {
          return (
            <li className="post-item" key={index}>
              <div className="posts-wrap">
                <PostsPreview
                  imgClassName="post-image"
                  itemImgClassName="posts-item-image"
                  postsItemTitleClassName="posts-item-tittle"
                  postsItemDateClassName="posts-item-date"
                  data={i}
                />
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
