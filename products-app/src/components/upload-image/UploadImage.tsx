import React, { Fragment } from "react";
import ImageUploading, {
  ImageType,
  ImageUploadingPropsType,
} from "react-images-uploading";

export function UploadImage({ value, onChange }: ImageUploadingPropsType) {
  return (
    <ImageUploading
      acceptType={["jpg", "png", "jpeg"]}
      value={value}
      onChange={onChange}
      maxFileSize={500000}
    >
      {({ onImageUpload, onImageUpdate, errors }) => {
        return (
          <div>
            <button onClick={onImageUpload}>Upload image</button>
            {errors?.acceptType && (
              <span style={{ color: "red" }}>
                Your selected file type is not allowed
              </span>
            )}
            {errors?.maxFileSize && (
              <span style={{ color: "red" }}>
                Your selected file size is to big
              </span>
            )}
            {value.map((img: ImageType, idx) => (
              <Fragment key={idx}>
                <img
                  className="create-post__image"
                  src={img.dataURL}
                  alt={img.file.name}
                />
                <button onClick={() => onImageUpdate(idx)}>Update Image</button>
              </Fragment>
            ))}
          </div>
        );
      }}
    </ImageUploading>
  );
}
