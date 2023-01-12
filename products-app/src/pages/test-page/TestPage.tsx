import React from "react";

type TestPageProps = {
  name: string;
  isShow: boolean;
};

export const TestPage = ({ name, isShow }: TestPageProps) => {
  return (
    <div>
      <h1>Test page</h1>
      <h2>Hello {name}</h2>
      {isShow && <p>Description of the page</p>}
    </div>
  );
};
