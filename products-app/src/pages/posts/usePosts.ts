import {
  ChangeEvent,
  useCallback,
  useEffect,
} from "react";
import { fetchPostsThunk } from "../../store/posts/posts-api";
import { useAppSelector, useAppDispatch } from "../../store/store";
import { likePost } from "../../store/posts/post-slice";

export const usePosts = (limit: number, offset: number) => {
  const { posts, count } = useAppSelector((state) => state.posts);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsThunk(`limit=${limit}&offset=${offset}`));
  }, [dispatch, limit, offset]);

  const handleSearchPosts = (e: ChangeEvent<HTMLInputElement>) => {
    // dispatch(fetchPostsThunk(`limit=15&search=${e.target.value}`));
  };

  const handleSubmitSearch = useCallback(
    (e: any) => {
      const search = e.target.elements.search.value;
      e.preventDefault();
      dispatch(
        fetchPostsThunk(`limit=${limit}&offset=${offset}&search=${search}`)
      );
    },
    [dispatch, limit, offset]
  );

  const handleLikePost = useCallback(
    (id: number) => {
      dispatch(likePost(id));
    },
    [dispatch]
  );

  return {
    posts,
    count,
    handleSearchPosts,
    handleLikePost,
    handleSubmitSearch,
  };
};
