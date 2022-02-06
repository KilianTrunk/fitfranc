import MainSection from "../Components/MainSection";
import OfferSection from "../Components/OfferSection";
import ReviewsSection from "../Components/ReviewsSection";
import FinalSection from "../Components/FinalSection";
import Footer from "../Components/Footer";

import * as React from "react";

function HomePage() {
  return (
    <>
      <MainSection/>
      <OfferSection/>
      <ReviewsSection/>
      <FinalSection/>
      <Footer/>
    </>
  );
}

export default HomePage;
