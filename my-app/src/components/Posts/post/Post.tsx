import React, { useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { IPost } from "../postPreview/PostPreview";
import "./post.css";
import { postsApi } from "../../appConstants";

export function Post() {
  const [post, setPost] = useState<IPost>({
    title: "",
    date: "",
    text: "",
    id: 0,
    image: "",
  });
  const { id } = useParams();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${postsApi}/${id}`);
      const post = await response.json();
      setPost(post);
    };

    fetchPosts();
  }, [id]);
  return (
    <div className="container">
      <div className="post-wrap" id={`${post.id}`}>
        <div className="post-tittle">{post.title}</div>
        <div className="post-date">{post.date} </div>
        <div className="contant-container">
          <div className="post-image">
            <img className="image" src={post.image} alt="#" />
          </div>
          <span className="post-text">{post.text}</span>
        </div>
      </div>
    </div>
  );
}
