import * as React from "react";

import House from "../components/house";

import MetaTag from "../components/metaTag";

const IndexPage = () => {
  return <House />;
};

export default IndexPage;

export const Head = () => {
  const title = "Three JS | Hey, Coddes";
  const description = "3д визуализация планировки дома";

  const data = {
    title: title,
    description: description,
    slug: `/`,
    preview: "/preview.jpg",
  };

  return <MetaTag data={data} />;
};
