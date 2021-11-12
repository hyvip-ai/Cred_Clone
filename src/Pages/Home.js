import React, { lazy, Suspense } from "react";
import Spinner from "../Components/Spinner";
import data from "../Data/ImageText";
import Mobiles from "../Components/Mobiles";

const ImageText = lazy(() => import("../Layout/ImageText"));
const Parallax = lazy(() => import("../Components/Parallax"));
const Story = lazy(() => import("../Components/Story"));
const Information = lazy(() => import("../Components/Information"));
const Rewards = lazy(() => import("../Components/Rewards"));
const Footer = lazy(() => import("../Components/Footer"));
const Rating = lazy(() => import("../Components/Rating"));
const Testimonials = lazy(() => import("../Components/Testimonials"));
const Upper = lazy(() => import("../parents/Upper"));

function Home() {
  return (
    <>
      <Suspense fallback={<Spinner />}>
        <Upper />
      </Suspense>

      <Mobiles />
      <Suspense fallback={<Spinner />}>
        <ImageText data={data.deserve_more} />
        <Rewards />
        <ImageText data={data.money_matters} />
        <Parallax />
        <ImageText data={data.security_first} />
        <Story />
        <Rating />
        <Testimonials />
        <Information />
        <Footer />
      </Suspense>
    </>
  );
}

export default Home;
