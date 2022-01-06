import React from "react";

const UserProfile = ({ username }) => {
  return (
    <>
      <h1>Welcome To {username} Profile Page</h1>
    </>
  );
};

export default UserProfile;

export const getServerSideProps = async (ctx) => {
    
  const { params, request, response } = ctx;

  return {
    props: { username: "Hayder Aly" },
  };
};
