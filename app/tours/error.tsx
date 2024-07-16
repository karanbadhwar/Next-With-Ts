"use client";

function error({ error }: { error: Error }) {
  console.log(error);

  return <div>There was an Error....</div>;
}

export default error;
