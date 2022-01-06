import React from "react";
import fs from "fs/promises";
import path from "path";

const ProductDetail = ({ loadedProduct }) => {
  // console.log(loadedProduct)

  if (!loadedProduct) {
    return <h3>loading ....</h3>;
  }

  return (
    <>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </>
  );
};

const getData = async () => {
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");

  const jsonData = await fs.readFile(filePath);

  const data = JSON.parse(jsonData);

  return data.products;
};

export const getStaticProps = async (ctx) => {
  const {
    params: { pid },
  } = ctx;

  const products = await getData();

  const loadedProduct = products.find((product) => product.id === pid);

  if (!loadedProduct) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      loadedProduct,
    },
  };
};

export const getStaticPaths = async () => {
  const products = await getData();

  const IDs = products.map((product) => {
    return {
      params: { pid: product.id },
    };
  });

  return {
    // paths: [
    //   { params: { pid: "p1" } },
    //   { params: { pid: "p2" } },
    //   { params: { pid: "p3" } },
    //   { params: { pid: "p4" } },
    //   { params: { pid: "p5" } },
    // ],
    // fallback: false;

    paths: IDs,
    fallback: true,
  };
};

export default ProductDetail;
