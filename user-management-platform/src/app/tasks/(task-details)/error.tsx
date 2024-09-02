"use client";

import { useEffect } from "react";

const Error = ({ error }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);

  return (
    <>
      <h1>Something went wrong</h1>
    </>
  );
};

export default Error;
