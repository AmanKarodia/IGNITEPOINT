import { useState } from "react";
import IGNITEBANNER from "../assets/IGNITE-POINT-BANNER.jpeg";

function Hero() {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full h-[20vh] sm:h-[45vh] md:h-[55vh] lg:h-[80vh] overflow-hidden">
      <img
        src={IGNITEBANNER}
        alt="Ignite Point Banner"
        className="absolute inset-0 w-full h-full object-fit"
      />
    </div>
  );
}

export default Hero;