import React, { useState, useEffect } from "react";
import { postsApiUrl } from "../../constants";
import { Card } from "../../components/Card";

import './CardList.css';

export const CardList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(postsApiUrl);
      const posts = await response.json();

      setPosts(posts);
    }

    fetchPosts();

  }, [])

  return (
    <div className="card-list">
      {posts.map((post) => {
         return (
         
           <Card key={post.id} data={post}/>
         
         )
       })}
    </div>
  );
  
};