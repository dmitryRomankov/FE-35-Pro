import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { postsApiUrl } from "../../../constants";
import { Card } from "../../../components/Card";

import "./CardPage.css"


export const CardPage = () => {
  const [post, setPost] = useState({});
  const params = useParams();
  console.log(params);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`${postsApiUrl}/${params.id}`);
      const post = await response.json();
      setPost(post);
    }

    fetchPost();

  }, [params.id]);

  const handleImageClick = () => {
    console.log(post.image);
  }

  return (
    <div className="card-page" onClick={handleImageClick}>
      <Card data={post}/>
    </div>
  );
};