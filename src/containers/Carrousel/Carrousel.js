import React from "react";
import Carousel from "./carousel";

function CarrouselBanner() {
  return (
    <Carousel component="ul" leftPadding={100} focus={0}>
      <li>Featured</li>
      <li>Highlighted</li>
      <li>Top</li>
      <li>For You</li>
      <li>Trending</li>
      <li>Coming Soon</li>
    </Carousel>
  );
}

export default CarrouselBanner;