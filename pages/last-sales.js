import React, { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const LastSalesPage = ({ data }) => {
  // const [sales, setSales] = useState([]);
  // const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);

  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setSales(data);
  //       setLoading(false);
  //     });
  // }, []);

  const { data: dataAlsias, error } = useSWR(
    "https://jsonplaceholder.typicode.com/posts",
    fetcher
  );

  if (error) {
    return <h1>No Data Yet !!</h1>;
  }

  if (!data) {
    return <h1>Loading .... </h1>;
  }

  return (
    <>
      new data
      <ul>
        {data.map((sale) => {
          return (
            <li key={sale.id}>
              <h1>{sale.title}</h1>
              <p>{sale.body}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await response.json();

  return {
    props: {
      data,
    },
    revalidate: 10,
  };
};

export default LastSalesPage;
