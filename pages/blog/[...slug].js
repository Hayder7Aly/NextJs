import React from "react";
import { useRouter } from "next/router";

const BlogPostsPage = () => {
  const router = useRouter();
  
  return (
    <>
      <h1>This is BlogPosts Page {router.query.slug}</h1>
    </>
  );
};

export default BlogPostsPage;
