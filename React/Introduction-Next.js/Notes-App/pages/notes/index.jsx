import React from "react";
import Link from "next/link";

const Notes = () => (
  <div>
    <h1>Note index path</h1>
    <Link href="/notes/[id]" as={`/notes/${1}`}>
      <a>Link</a>
    </Link>
  </div>
);

export default Notes;
