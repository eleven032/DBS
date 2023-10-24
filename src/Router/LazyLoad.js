import React from "react";
import { Spin } from "antd";
const lazyLoad = (Comp) => {
  return (
    <React.Suspense
      fallback={
        <Spin
          size="large"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      }
    >
      <Comp />
    </React.Suspense>
  );
};

export default lazyLoad;
