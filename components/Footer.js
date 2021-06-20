import React from "react";
import styled from "styled-components";

import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FooterContainer = styled.footer`
  width: 100%;
  height: 6%;
  border-top: 1px solid #eaeaea;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  z-index: 9999;

  @media (max-width: 600px) {
    height: 8%;
  }
`;

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-right: 0.5vw;
  padding-left: 0.5vw;

  &:hover {
    animation: text-shadow-pop-bottom 0.6s both;
    color: #c0c0c0;
    transition: color 0.2s linear;
  }

  @media (max-width: 600px) {
    padding: 0 3%;
  }
`;

export default function Footer() {
  return (
    <FooterContainer>
      <Link href="https://github.com/JoeGrn">
        <FontAwesomeIcon
          style={{ width: "40px", height: "40px" }}
          icon={faGithub}
        />
      </Link>
      <Link href="https://www.twitter.com/JoeGrn">
        <FontAwesomeIcon
          style={{ width: "40px", height: "40px" }}
          icon={faTwitter}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/jgreen96">
        <FontAwesomeIcon
          style={{ width: "40px", height: "40px" }}
          icon={faLinkedin}
        />
      </Link>
      <Link href="mailto:joseph.peter.green@gmail.com">
        <FontAwesomeIcon
          style={{ width: "40px", height: "40px" }}
          icon={faEnvelope}
        />
      </Link>
    </FooterContainer>
  );
}
