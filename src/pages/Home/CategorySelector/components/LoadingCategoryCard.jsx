import React from "react";
import { Skeleton } from "primereact/skeleton";

const LoadingCategoryCard = () => {
  return (
    <>
      <div className="flex justify-between px-20">
        <div className="flex flex-col items-center gap-3">
          <Skeleton shape="circle" size="6rem" className="mr-2"></Skeleton>
          <Skeleton width="10rem" className="mb-2"></Skeleton>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Skeleton shape="circle" size="6rem" className="mr-2"></Skeleton>
          <Skeleton width="10rem" className="mb-2"></Skeleton>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Skeleton shape="circle" size="6rem" className="mr-2"></Skeleton>
          <Skeleton width="10rem" className="mb-2"></Skeleton>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Skeleton shape="circle" size="6rem" className="mr-2"></Skeleton>
          <Skeleton width="10rem" className="mb-2"></Skeleton>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Skeleton shape="circle" size="6rem" className="mr-2"></Skeleton>
          <Skeleton width="10rem" className="mb-2"></Skeleton>
        </div>
      </div>
    </>
  );
};

export default LoadingCategoryCard;
