import { useState } from "react";

export const useImageHandler = (initialState) => {
  const [image, setImage] = useState({
    preview: initialState?.preview || "",
    name: initialState?.name || "",
    contentData: initialState?.contentData || "",
    type: initialState?.type || "",
  });

  const onChangeImage = async (element) => {
    if (element?.target.files.length) {
      const reader = new FileReader();

      await reader.readAsDataURL(element?.target.files[0]);

      reader.onload = async () => {
        const result = await reader.result;

        setImage({
          preview: URL.createObjectURL(element?.target.files[0]),
          contentData: result,
          name: element?.target?.files[0].name,
          type: element?.target?.files[0].type,
        });
      };
    }
  };

  return [image, onChangeImage];
};
