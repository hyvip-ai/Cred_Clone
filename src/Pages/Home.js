import React, { lazy, Suspense } from "react";
import Spinner from "../Components/Spinner";
import data from "../Data/ImageText";
import Mobiles from '../Components/Mobiles'

const ImageText = lazy(() => import("../Layout/ImageText"));
const Parallax = lazy(() => import("../Components/Parallax"));
const Story = lazy(() => import("../Components/Story"));
const Information = lazy(() => import("../Components/Information"));
const Banner = lazy(() => import("../Components/Banner"));
const Rewards = lazy(() => import("../Components/Rewards"));
const Footer = lazy(() => import("../Components/Footer"));
const Rating = lazy(() => import("../Components/Rating"));
const Testimonials = lazy(() => import("../Components/Testimonials"));


const Navbar = lazy(() => import("../Components/Navbar"));
const ProgressIndicator = lazy(() =>
  import("../Components/Progress_Indicator")
);
function Home() {
  return (
    <>
      <Suspense fallback={<Spinner/>}>
        <ProgressIndicator />
        <Navbar />
        <Banner />
        </Suspense>

        <Mobiles />
        <Suspense fallback={<Spinner/>}>
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
