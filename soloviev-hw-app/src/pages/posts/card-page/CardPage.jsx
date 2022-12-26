import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { postImageSelector } from "../../../store/selectors";
import { postImagePreview } from "../../../store/post-image-slice";
import { postsApiUrl } from "../../../constants";
import { Card } from "../../../components/Card";
import { ModalImage } from "./ModalImage";

import "./CardPage.css"

export const CardPage = () => {
  const [post, setPost] = useState({});
  const params = useParams();
  console.log(params);

  const imageUrl = useSelector(postImageSelector);
  const dispatch = useDispatch();

  const [modalActive, setModalActive] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(`${postsApiUrl}/${params.id}`);
      const post = await response.json();
      setPost(post);
    }

    fetchPost();

  }, [params.id]);

  const handlePostClick = () => {
    dispatch(postImagePreview(post.image));
    console.log(imageUrl);
    setModalActive(!modalActive);
  };

  return (
    <div className="card-page" onClick={handlePostClick}>
      <Card data={post}/>
      <ModalImage image={imageUrl}active={modalActive} setActive={setModalActive}></ModalImage>
    </div>
  );
};