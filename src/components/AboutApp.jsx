import React from "react";

function AboutApp() {
  return (
    <div className="about-app container mx-auto w-full flex flex-col itmes-center justify-center gap-4">
      <h1 className="text-center text-2xl md:text-5xl lg:text-6xl font-bold pb-4 pt-4 md:pt-0">
        TV SERIES SEARCH ENGINE
      </h1>
      <p className="text-white text-center text-xl md:text-3xl pb-11">
        Enter the series you wish to search for please. You may view details on
        the show, including its rating, synopsis, network, status, and more.
      </p>
    </div>
  );
}

export default AboutApp;
