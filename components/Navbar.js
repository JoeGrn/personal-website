import React from "react";
import Link from "next/link";
import styled from 'styled-components';

const Nav = styled.nav`
  position: absolute;
  width: 100%;
  display: flex;
  height: 6%;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  z-index: 9999;
  border-bottom: 1px solid #eaeaea;

  @media (max-width: 600px) {
    justify-content: center;
    font-size: 0.9rem;
  }
`;

const Text = styled.div`
  padding-right: 2%;
  font-size: 1.3rem;
  font-family: monospace;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 3%;
  }

  &:hover {
    animation: text-shadow-pop-left 0.6s both;
    color: #c0c0c0;
    transition: color 0.5s linear;
  }
`;

const Break = styled.div`
  padding-right: 2%;
  font-size: 1.3rem;
  font-family: monospace;

  @media (max-width: 600px) {
    font-size: 0.9rem;
    padding: 3%;
  }
`;


export default function Navbar() {
    return (
        <Nav>
            <Text><Link href="/">Home</Link></Text>
            <Break>|</Break>
            <Text><Link href="/blog">Blog</Link></Text>
            <Break>|</Break>
            <Text><Link href="portfolio">Portfolio</Link></Text>
        </Nav>
    );
}
