import { Input } from "../../ui";
import { usePosts } from "./usePosts";
import "./styles.scss";
import { Pagination } from "../../components/pagination/Pagination";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

export const Posts = () => {
  const [params] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(+params.get("page") || 1);

  const limitPerPage = 10;
  const currentOffset =
    currentPage > 1 ? (currentPage - 1) * limitPerPage : null;

  const {
    handleSearchPosts,
    handleLikePost,
    handleSubmitSearch,
    posts,
    count,
  } = usePosts(limitPerPage, currentOffset);

  const countOfPages = Math.ceil(count / limitPerPage);

  return (
    <div className="posts">
      <form className="posts__search-form" onSubmit={handleSubmitSearch}>
        <Input
          onChange={handleSearchPosts}
          name="search"
          id="search"
          placeholder="Search posts"
        />
        <button style={{ padding: "10px" }}>Search</button>
      </form>
      <div className="posts__list">
        {posts.map((post) => (
          <div className="posts__post-card" key={post.id}>
            <img className="posts__image" src={post.image} alt={post.title} />
            <p className="posts__post-title">{post.text}</p>
            <p
              className={
                post.liked ? "posts__like posts__like--liked" : "posts__like"
              }
              onClick={() => handleLikePost(post.id)}
            >
              ❤
            </p>
          </div>
        ))}
      </div>
      <Pagination
        countOfPages={countOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
