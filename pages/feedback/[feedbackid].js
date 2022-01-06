import { useRouter } from "next/dist/client/router";
import React, { useState, useEffect } from "react";

const SingleFeedback = () => {
  const {
    query: { feedbackid },
  } = useRouter();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/api/" + feedbackid)
      .then((res) => res.json())
      .then((data) => {
        setData(data.feedback);
      });
  }, [feedbackid]);

  if (!data) {
    return <h1>Loading !!!</h1>;
  }

  return (
    <>
      <h1>{data.email}</h1>
      <p>{data.feedback}</p>
    </>
  );
};

export default SingleFeedback;
