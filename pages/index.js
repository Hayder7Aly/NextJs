import React from "react";
import Link from "next/link";
import fs from "fs/promises";
import path from "path";

const HomePage = ({ products }) => {
  return (
    <>
      <h1>The Home Page</h1>
      {products.map((product) => (
        <div key={product.id}>
          <Link href={`products/${product.id}`}>{product.title}</Link>
        </div>
      ))}
      <ul>
        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/survey">Clients</Link>
        </li>
        <li>
          <Link href="/blog/2021/10">BLoG in 2021</Link>
        </li>
      </ul>
    </>
  );
};

export const getStaticProps = async (context) => {
  
  console.log("Re generating ... ");
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  let data = JSON.parse(jsonData);

  if (!data) {
    return {
      redirect: {
        destination: "/about",
      },
    };
  }

  if (data.products.length === 0) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      products: data.products,
    },
    revalidate: 60,
  };
};

export default HomePage;
