import { useRouter } from "next/router";
import React from "react";

const ClientsProjects = () => {
  const router = useRouter();

  const loadProjectHandler = (id,cp) => {
    // load data ...

    // router.push({
    //   pathname: `/survey/[id]/[clientproject]`,
    //   query: { id: router.query.id, clientproject: "Project A" },
    // });

    router.push(`/survey/${id}/${cp}`)
  };

  return (
    <>
      <h1>The project of give client : {router.query.id.toUpperCase()}</h1>
      <button onClick={() => loadProjectHandler(router.query.id, "Project something")}>Load Project A</button>
    </>
  );
};

export default ClientsProjects;
