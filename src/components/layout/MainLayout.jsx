import React, { memo } from "react";

const MainLayout = ({ children }) => {
  return <main className="min-h-screen overflow-x-hidden">{children}</main>;
};

export default memo(MainLayout);
