import React from "react";
import { Skeleton } from "primereact/skeleton";

const LoadingViewService = () => {
  return (
    <>
      <main className="max-w-[1440px] m-auto px-28 mb-40 mt-[60px] flex justify-between">
        <section className="w-full max-w-[50%] pr-[34px]">
          <Skeleton width="100%" height="37.5rem"></Skeleton>
          <Skeleton width="20rem" height="1.5rem" className="mt-4"></Skeleton>
          <Skeleton height="1rem" className="mt-4"></Skeleton>
          <Skeleton height="1rem" className="mt-4"></Skeleton>
          <Skeleton width="80%" height="1rem" className="mt-4"></Skeleton>
          <Skeleton width="50%" height="1rem" className="mt-4"></Skeleton>
        </section>

        <section className="w-full max-w-[50%] pl-[34px]">
          <Skeleton width="20rem" height="3rem" className="mb-8"></Skeleton>
          <Skeleton width="30rem" height="1.5rem" className="mb-3"></Skeleton>
          <hr />
          <div className="flex items-baseline gap-2">
            <Skeleton width="12rem" height="4rem" className="my-4"></Skeleton>
            <Skeleton width="12rem" height="2rem" className="my-4"></Skeleton>
          </div>
          <Skeleton width="20rem" height="1.5rem" className="mt-4"></Skeleton>
          <Skeleton height="4rem" className="my-4"></Skeleton>
          <hr />
          <Skeleton width="20rem" height="1.5rem" className="mt-4"></Skeleton>
          <div className="flex justify-between">
            <Skeleton width="5rem" height="5rem" className="mt-4"></Skeleton>
            <Skeleton width="5rem" height="5rem" className="mt-4"></Skeleton>
            <Skeleton width="5rem" height="5rem" className="mt-4"></Skeleton>
          </div>
        </section>
      </main>
    </>
  );
};

export default LoadingViewService;
