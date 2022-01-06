import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

const UsersFeedback = ({ feedbacks }) => {
  const router = useRouter();

  const loadFeedbackHanlder = (id) => router.push("feedback/" + id);

  return (
    <>
      {feedbacks.map((feedback) => (
        <div key={feedback.id}>
          <p>{feedback.feedback}</p>
          <button onClick={loadFeedbackHanlder.bind(null, feedback.id)}>
            Show Details
          </button>
        </div>
      ))}
    </>
  );
};

export const getStaticProps = async () => {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedbacks: data,
    },
  };
};

export default UsersFeedback;
