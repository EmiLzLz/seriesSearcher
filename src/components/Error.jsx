import React from "react";
import errorImg from "../assets/errorImg.png";

function Error() {
  return (
    <div className="error-container container mx-auto h-full flex items-center">
      <h6 className="text-white text-center text-sm md:text-3xl lg:text-4xl font-extrabold m-auto bg-black">
        THE SERIES DOESN'T EXISTS OR NAME IS INCORRECT
      </h6>
    </div>
  );
}

export default Error;
