import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
    width: 100%;
    flex: 1;
    height: 100px;
`

export default function Navbar() {
    return (
        <Nav>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/blog">
                <a>Blog</a>
            </Link>
            <Link href="portfolio">
                <a>Portfolio</a>
            </Link>
        </Nav>
    )
}