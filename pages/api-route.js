import React, { useRef, useState } from "react";

const ApiRoute = () => {
  const [feedbacks, setFeedback] = useState([]);
  const emailRef = useRef();
  const feedbackRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    
    const userEmail = emailRef.current.value;
    const userFeedback = feedbackRef.current.value;
    const userFeedbackObj = { email: userEmail, feedback: userFeedback };
    

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(userFeedbackObj),
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const loadFeedbackHandler = async () => {
    const response = await fetch("/api/feedback");
    const data = await response.json();
    setFeedback(data.feedback);
  };

  return (
    <>
      <div style={{ margin: "5rem" }}>
        <h1>Form for Feedback</h1>

        
        <form>
          <label htmlFor="email">Your Email Address</label>
          <br />
          <input type="email" id="email" name="email" ref={emailRef} />
          <br />
          <label htmlFor="feedback">Your Feedback</label>
          <br />
          <textarea
            id="feedback"
            name="feedback"
            rows={10}
            cols={30}
            ref={feedbackRef}
          />
          <br />
          <br />
          <button onClick={submitHandler} type="submit">
            Send Feedback
          </button>
        </form>
        <br />
        <br />
        <button onClick={loadFeedbackHandler}>Load Feedback</button>
        <br />
        <br />
        {feedbacks.map((feedback) => (
          <div key={feedback.id}>
            <h1>{feedback.email}</h1>
            <p>{feedback.feedback}</p>
          </div>
        ))}
      </div>
    </>

);
};

export default ApiRoute;
