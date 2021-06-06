import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Nav = styled.nav`
    position: absolute;
    width: 100%;
    display: flex;
    height: 100px;
    justify-content: flex-end;
    align-items: center;
`
const Page = styled(Link)`
    padding-right: 20px;
`

export default function Navbar() {
    return (
        <Nav>
            <Page href="/">
                <a>Home</a>
            </Page>
            <Page href="/blog">
                <a>Blog</a>
            </Page>
            <Page href="portfolio">
                <a>Portfolio</a>
            </Page>
        </Nav>
    )
}