import React from "react";
import { useRouter } from "next/router";

// /user/:id/:thing

const Notes = () => {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);

  return <div>Note : {params}</div>;
};

export default Notes;
