import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IPost } from "../postPreview/PostPreview";
import "./post.css";
import { URL } from "../../appConstants";
import { openPreviewAction } from "../../../store/actions";
import { openPreviewSelector } from "../../../store/selectors";
import { ModalWindow } from "../../modalPic/ModalWindow";

export function Post() {
  const [post, setPost] = useState<IPost>({
    title: "",
    date: "",
    text: "",
    id: 0,
    image: "",
  });
  const dispatch = useDispatch();
  const openPreview = useSelector(openPreviewSelector);
  const [modalActive, setModalActive] = useState(false);
  const handleOpenPreview = () => {
    dispatch(openPreviewAction(openPreview === true ? false : post.image));
    setModalActive(!modalActive);
  };
  const { id } = useParams();
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`${URL}/${id}`);
      const post = await response.json();
      setPost(post);
    };

    fetchPosts();
  }, [id]);

  return (
    <div className="container">
      <ModalWindow
        modalImg={post.image}
        active={modalActive}
        setModalActive={setModalActive}
      />
      <div className="post-wrap" id={`${post.id}`}>
        <div className="post-tittle">{post.title}</div>
        <div className="post-date">{post.date} </div>
        <div className="contant-container">
          <div className="post-image">
            <img className="image" src={post.image} alt="#" />
          </div>
          <button onClick={handleOpenPreview} className="quiсk-view">
            quiсk-view
          </button>
          <span className="post-text">{post.text}</span>
        </div>
      </div>
    </div>
  );
}
