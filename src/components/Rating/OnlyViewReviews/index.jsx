import React from "react";
import { Rating } from "primereact/rating";

const OnlyViewReviews = ({rating = 0}) => {
  return (
    <>
      <Rating value={rating} cancel={false} readOnly />
    </>
  );
};

export default OnlyViewReviews;
