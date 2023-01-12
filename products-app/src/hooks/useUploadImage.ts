import { useState } from "react";
import { ImageListType } from "react-images-uploading";

export const useUploadImage = () => {
  const [images, setImages] = useState([]);

  const handleUploadImages = (image: ImageListType) => {
    setImages(image);
  };

  return {
    images,
    handleUploadImages,
  };
};
