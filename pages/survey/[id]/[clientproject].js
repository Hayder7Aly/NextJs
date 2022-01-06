import React from "react";

import { useRouter } from "next/router";

const SelectedClientProjectPage = () => {
  const router = useRouter();
  return (
    <>
      <h1>
        The Proejct Page for a Specific Project for Selected Client ==={" "}
        {router.query.id} :  
        {router.query.clientproject}
      </h1>
    </>
  );
};

export default SelectedClientProjectPage;
