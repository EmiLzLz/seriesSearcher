import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCode } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="container mx-auto text-white pt-4 px-2 pb-3 flex justify-between items-center">
      <h6>Emiliano López López</h6>
      <div className="social-links flex justify-center items-center gap-4">
        <a href="https://www.linkedin.com/in/emiliano-lopez-lopez" target="_blank" className="text-white">
          <FontAwesomeIcon
            icon={faBriefcase}
            bounce
            size="lg"
            style={{ color: "#55a9e6" }}
          />
        </a>
        <a href="https://github.com/EmiLzLz?tab=repositories" target="_blank" className="text-white">
          <FontAwesomeIcon
            icon={faCode}
            bounce
            size="lg"
            style={{ color: "#55a9e6" }}
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
