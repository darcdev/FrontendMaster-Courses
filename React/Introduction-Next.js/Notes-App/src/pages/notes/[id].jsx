/** @jsxRuntime classic /
/** @jsx jsx */
import { jsx } from "theme-ui";
import { useRouter } from "next/router";

// /user/:id/:thing

const Notes = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div sx={{ variant: "containers.page" }}>
      <h1>Note: {id} </h1>
    </div>
  );
};

export default Notes;
