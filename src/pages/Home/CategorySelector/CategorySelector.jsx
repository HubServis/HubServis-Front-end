import React, { useState } from "react";
import "./Style.css";
import { Carousel } from "primereact/carousel";
import { useFetch } from "../../../hooks/useFetch";
import LoadingCategoryCard from "./components/LoadingCategoryCard";

const MOCKIMGCATEGORY =
  "https://img.freepik.com/fotos-gratis/manicure-mestre-faz-manicure-nas-maos-da-mulher-conceito-de-tratamento-de-spa_186202-7769.jpg";

const MockCategoriesApi = [
  {
    name: "Massagem",
    img_src:
      "https://img.freepik.com/fotos-gratis/manicure-mestre-faz-manicure-nas-maos-da-mulher-conceito-de-tratamento-de-spa_186202-7769.jpg",
  },
  {
    name: "Massagem 2",
    img_src:
      "https://img.freepik.com/fotos-gratis/manicure-mestre-faz-manicure-nas-maos-da-mulher-conceito-de-tratamento-de-spa_186202-7769.jpg",
  },
  {
    name: "Massagem 3",
    img_src:
      "https://img.freepik.com/fotos-gratis/manicure-mestre-faz-manicure-nas-maos-da-mulher-conceito-de-tratamento-de-spa_186202-7769.jpg",
  },
  {
    name: "Massagem 4",
    img_src:
      "https://img.freepik.com/fotos-gratis/manicure-mestre-faz-manicure-nas-maos-da-mulher-conceito-de-tratamento-de-spa_186202-7769.jpg",
  },
  {
    name: "Massagem 5",
    img_src:
      "https://img.freepik.com/fotos-gratis/manicure-mestre-faz-manicure-nas-maos-da-mulher-conceito-de-tratamento-de-spa_186202-7769.jpg",
  },
  {
    name: "Massagem 6",
    img_src:
      "https://img.freepik.com/fotos-gratis/manicure-mestre-faz-manicure-nas-maos-da-mulher-conceito-de-tratamento-de-spa_186202-7769.jpg",
  },
];

const CategorySelector = () => {
  const { data, isFetching, error } = useFetch("/categories");
  const [categories, setCategories] = useState(MockCategoriesApi);

  const productTemplate = (category) => {
    return (
      <div className="category cursor-pointer">
        <img
          src="https://img.freepik.com/fotos-gratis/manicure-mestre-faz-manicure-nas-maos-da-mulher-conceito-de-tratamento-de-spa_186202-7769.jpg"
          alt=""
        />
        <p>{category.name}</p>
      </div>
    );
  };

  const responsiveOptions = [
    {
      breakpoint: "1024px",
      numVisible: 4,
      numScroll: 4,
    },
    {
      breakpoint: "991px",
      numVisible: 3,
      numScroll: 3,
    },
    {
      breakpoint: "767px",
      numVisible: 2,
      numScroll: 2,
    },
    {
      breakpoint: "460px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

  console.log(data);

  return (
    <section
      id="section-category"
      className="overflow-hidden mt-8 mx-auto px-4 lg:px-10"
    >
      <h2 className="h2-title-section">Categorias</h2>
      {isFetching && <LoadingCategoryCard />}
      {!isFetching && (
        <Carousel
          value={data}
          numVisible={5}
          itemTemplate={productTemplate}
          responsiveOptions={responsiveOptions}
        />
      )}
    </section>
  );
};

export default CategorySelector;
