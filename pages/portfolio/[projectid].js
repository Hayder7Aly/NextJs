import React from "react";
import { useRouter } from "next/router";

const ProjectDetail = () => {
  const router = useRouter();

  console.log("pathName ", router.pathname)
  console.log("Query ",router.query)
  return (
    <div>
      <h1>The Portfolio Project Detail .......... Page ========{">"} {router.query.projectid}</h1>
    </div>
  );
};

export default ProjectDetail;
