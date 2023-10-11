import { useState } from "react";

export const useImageHandler = (initialState) => {
  const [image, setImage] = useState({
    preview: initialState?.preview || "",
    raw: initialState?.raw || "",
  });

  const onChangeImage = (element) => {
    if (element?.target.files.length) {
      setImage({
        preview: URL.createObjectURL(element?.target.files[0]),
        raw: element?.target.files[0],
      });
    }
  };

  return [image, onChangeImage];
};
