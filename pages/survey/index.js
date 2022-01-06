import React from "react";

import Link from "next/link";

const ClientPage = () => {
  const clients = [
    {
      id: "hayder",
      name: "Hayder Aly",
    },
    {
      id: "aly",
      name: "Aly Raza",
    },
    {
      id: "farman",
      name: "Farman Aly",      pathname: `/survey/[id]/[clientproject]`,

    },
  ];
  return (
    <>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            {/* <Link href={{pathname : "/survey/[id]", query: {id : client.id}}}>{client.name}</Link> */}
            <Link href={`/survey/${client.id}`}>{client.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ClientPage;
