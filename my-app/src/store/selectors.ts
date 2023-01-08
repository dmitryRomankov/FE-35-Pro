import { RootState } from "./store";

export const openPreviewSelector = (state: RootState) => state.preview.isOpen;
export const postsSelector = (state: RootState) => state.post.posts;
// export const favoritesSelector = (state: RootState) => state.post.posts;
