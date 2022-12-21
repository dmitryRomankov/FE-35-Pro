import { takeLatest, call, put } from "redux-saga/effects";
import { IPost, setPostsError, setPostsSuccess, getPosts } from "./post-slice";

const fetchPost = async () => {
  const response = await fetch(
    "https://studapi.teachmeskills.by/blog/posts/?limit=10"
  );
  return await response.json();
};

interface IPostsResponse {
  results: IPost[];
}

export function* handleGetPosts() {
  try {
    const response: IPostsResponse = yield call(fetchPost);
    const { results } = response;
    yield put(setPostsSuccess(results));
  } catch (err) {
    yield put(setPostsError(err.toString()));
  }
}

export function* watcherSaga() {
  yield takeLatest(getPosts.type, handleGetPosts);
}
