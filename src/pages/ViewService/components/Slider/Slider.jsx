import React, { useState } from "react";
import { Galleria } from "primereact/galleria";

const Slider = ({ DataImages }) => {
  const [images, setImages] = useState(DataImages);

  const itemTemplate = (item) => {
    return (
      <img
        src={item.img_src}
        alt={item.alt}
        style={{
          width: "100%",
          maxHeight: "600px",
          display: "block",
          objectFit: "cover",
		  borderRadius: '8px'
        }}
      />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImgSrc}
        alt={item.alt}
        style={{ display: "block" }}
      />
    );
  };

  return (
    <Galleria
      value={images}
      circular
      style={{ maxHeight: "600px" }}
      //   numVisible={5}
      showThumbnails={false}
      showItemNavigators
      item={itemTemplate}
      thumbnail={thumbnailTemplate}
      showIndicators
    />
  );
};

export default Slider;
