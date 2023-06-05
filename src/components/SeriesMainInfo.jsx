import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiagramProject,
  faGlobe,
  faStar,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

function SeriesMainInfo({ title, image, rating, network, site }) {
  return (
    <article className="main-info text-white text-center px-2">
      <div className="title flex items-center justify-center gap-2 ">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          size="lg"
          style={{ color: "#5aa9e6" }}
        />
        <h3 className="font-bold text-4xl text-[#A657AE]">
          {title}
        </h3>
      </div>

      <div className="img-container w-auto flex justify-center pb-9">
        <img src={image} alt={title} className=" " />
      </div>

      <div className="facts">
        <div className="fact-group flex flex-row gap-3 pt-4 pb-1 justify-center items-center">
          <FontAwesomeIcon
            icon={faDiagramProject}
            size="lg"
            style={{ color: "#5aa9e6" }}
          />
          <p className="font-bold text-[#A657AE] text-xl">NETWORK: </p>
          <p className="text-lg">{network}</p>
        </div>
        <div className="fact-group flex flex-row gap-3 py-2 justify-center items-center">
          <FontAwesomeIcon
            icon={faGlobe}
            size="lg"
            style={{ color: "#5aa9e6" }}
          />
          <p className="font-bold text-[#A657AE] text-xl">SITE: </p>
          <a className="text-lg" href={site} target="_blank">
            {title}
          </a>
        </div>
        <div className="fact-group flex flex-row gap-3 py-2 justify-center items-center">
          <FontAwesomeIcon
            icon={faStar}
            size="lg"
            style={{ color: "#5aa9e6" }}
          />
          <p className="font-bold text-[#A657AE] text-xl">RATING: </p>
          <p className="text-lg">{rating}</p>
        </div>
      </div>
    </article>
  );
}

export default SeriesMainInfo;
