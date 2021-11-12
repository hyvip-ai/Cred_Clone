import React, { lazy, Suspense } from "react";
import Spinner from "../Components/Spinner";
import Mobiles from "../Components/Mobiles";
const Lower = lazy(()=>import("../parents/Lower"));

const Upper = lazy(() => import("../parents/Upper"));

function Home() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Upper />
      </Suspense>

      <Mobiles />
      <Suspense fallback={<Spinner />}>
        <Lower/>
      </Suspense>
    </>
  );
}

export default Home;
