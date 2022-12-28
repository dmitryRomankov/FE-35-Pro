// import postReducer from "./post-slice";

export const themeSelector = (state) => {
  return state.themeReducer.currentTheme;
};

export const imagePreviewSelector = (state) => {
  return state.imagePreviewReducer.imageIsOpen;
};

export const postSelector = (state) => {
  return state.postReducer.posts;
}

export const popularPostsIdSelector = (state) => {
  return state.postReducer.popularPostsId;
}

export const favoritePostsIdSelector = (state) => {
  return state.postReducer.favoritePostsId;
}

export const postImageSelector = (state) => {
  return state.postImageReducer.imageUrl;
}