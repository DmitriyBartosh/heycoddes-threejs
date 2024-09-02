import * as React from "react";
import { Script } from "gatsby";

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <React.Fragment key="font-links">
      <link
        key="preconnect-googleapis"
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link
        key="preconnect-gstatic"
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        key="googlepis-nato-sans-mono"
        href="https://fonts.googleapis.com/css2?family=Noto+Sans+Mono:wdth,wght@62.5..100,100..900&display=swap"
        rel="stylesheet"
      />
    </React.Fragment>,
  ]);
};
