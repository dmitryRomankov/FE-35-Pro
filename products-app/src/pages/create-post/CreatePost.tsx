import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UploadImage } from "../../components/upload-image";
import { useUploadImage } from "../../hooks/useUploadImage";
import { createPostThunk, INewPost } from "../../store/posts/posts-api";
import { useAppDispatch, useAppSelector } from "../../store/store";

import { Input, Spinner } from "../../ui";
import "./styles.scss";

export function CreatePost() {
  const [newPost, setNewPost] = useState<INewPost>({
    title: "",
    lesson_num: "",
    text: "",
  });

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, isNewPostCreated } = useAppSelector((state) => state.posts);

  const { images, handleUploadImages } = useUploadImage();

  const handlePostChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewPost((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleCreateNewPost = () => {
    const post = {
      ...newPost,
      image: images.at(0)?.file,
      lesson_num: +newPost.lesson_num,
    };

    dispatch(createPostThunk(post));
  };

  return (
    <div>
      <h1>Create Post</h1>
      {!isNewPostCreated && !loading && (
        <div className="create-post">
          <Input
            type="text"
            name="title"
            placeholder="Enter title"
            value={"" + newPost.title}
            onChange={handlePostChange}
          />
          <Input
            type="text"
            name="lesson_num"
            placeholder="Enter lesson number"
            value={"" + newPost.lesson_num}
            onChange={handlePostChange}
          />
          <textarea
            name="text"
            cols={10}
            rows={5}
            placeholder="Enter some text"
            value={newPost.text}
            onChange={handlePostChange}
          />

          <UploadImage value={images} onChange={handleUploadImages} />

          <div className="create-post__buttons">
            <button
              onClick={() => navigate("/posts")}
              className="create-post__button"
            >
              Cancel
            </button>
            <button
              className="create-post__button"
              onClick={handleCreateNewPost}
            >
              Create Post
            </button>
          </div>
        </div>
      )}
      {isNewPostCreated && !loading && (
        <div>
          <button onClick={() => navigate("/posts")}>
            Go to the all posts page
          </button>
          <h2>Post has been successfully created</h2>
        </div>
      )}
      {loading && <Spinner />}
    </div>
  );
}

