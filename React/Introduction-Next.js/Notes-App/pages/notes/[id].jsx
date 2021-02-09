import React from "react";
import { useRouter } from "next/router";

// /user/:id/:thing

const Notes = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>Note : {id}</div>;
};

export default Notes;
