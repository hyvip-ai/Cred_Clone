import React, { lazy } from "react";
const Navbar = lazy(() => import("../Components/Navbar"));
const Banner = lazy(() => import("../Components/Banner"));

const ProgressIndicator = lazy(() =>
  import("../Components/Progress_Indicator")
);
function Upper() {
  return (
    <>
      <ProgressIndicator />
      <Navbar />
      <Banner />
    </>
  );
}

export default Upper;
