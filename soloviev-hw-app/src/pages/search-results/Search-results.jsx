import React, { useState, useEffect } from "react";


import './CardList.css';

export const SearchResults = () => {
  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const response = await fetch(postsApiUrl);
  //     const posts = await response.json();

  //     setPosts(posts);
  //   }

  //   fetchPosts();

  // }, [])

  return (
    <div className="container">
      <h2>Search results</h2>
      <div className="card-list">

      </div>
    </div>
  );
  
};